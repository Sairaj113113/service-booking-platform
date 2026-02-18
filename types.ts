
export interface FileNode {
  name: string;
  content?: string;
  language?: string;
  children?: FileNode[];
  isOpen?: boolean;
}

export enum FileType {
  JAVA = 'java',
  XML = 'xml',
  YAML = 'yaml',
  PROPERTIES = 'properties',
  MD = 'markdown'
}
