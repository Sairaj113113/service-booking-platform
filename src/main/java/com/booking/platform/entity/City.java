package com.booking.platform.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String state;

    @Builder.Default
    private String status = "ACTIVE";

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    private List<Area> areas;
}