type TreeElementType = 'showcase' | 'dataheap' | 'group';

export interface TreeElement {
  type: TreeElementType;
  id: string;
  title: string;
  hierarchy: string[];
}

export interface DataWrapper<T> {
  items: T[];
}
