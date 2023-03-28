import { DataWrapper, TreeElement } from '@/types/tree';

const data: TreeElement[] = [
  {
    hierarchy: ['Group 1'],
    id: '1',
    title: 'Group 1',
    type: 'group',
  },
  {
    hierarchy: ['Group 1', 'Group 2'],
    id: '2',
    title: 'Group 2',
    type: 'group',
  },

  {
    hierarchy: ['Group 1', 'Group 2', 'Group 3'],
    id: '3',  
    title: 'Group 3',
    type: 'group',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 3', 'Group 4'],
    id: '4',
    title: 'Group 4',
    type: 'group',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Showcase 1'],
    id: '5',
    title: 'Showcase 1',
    type: 'showcase',
  },
  {
    hierarchy: [ 'Group 1', 'Group 2', 'Group 3', 'Group 4', 'Showcase 2'],
    id: '6',
    title: 'Showcase 2',
    type: 'showcase',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 3', 'Group 5'],
    id: '7',
    title: 'Group 5',
    type: 'group',
  },

  {
    hierarchy: ['Group 1', 'Group 2', 'Group 6'],
    id: '8',
    title: 'Group 6',
    type: 'group',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 6', 'Showcase 3'],
    id: '9',
    title: 'Showcase 3',
    type: 'showcase',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 6', 'Showcase 4'],
    id: '10',
    title: 'Showcase 4',
    type: 'showcase',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 6', 'Showcase 5'],
    id: '11',
    title: 'Showcase 5',
    type: 'showcase',
  },
  {
    hierarchy: ['Group 1', 'Group 2', 'Group 6', 'Dataheap 1'],
    id: '12',
    title: 'Dataheap 1',
    type: 'dataheap',
  },
];

export const treeData: DataWrapper<TreeElement> = {
  items: data,
};