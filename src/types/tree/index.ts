type TreeElementType = 'showcase' | 'dataheap' | 'group';

export interface TreeElement {
  type: TreeElementType;
  title: string;
  hierarchy: string[];
}

export interface DataWrapper<T> {
  items: T[];
}
