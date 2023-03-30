<template>
    <div class="hello">
        <ag-grid-vue
            style="height: 90vh"
            class="ag-theme-balham ag-theme-custom"
            treeData
            :defaultColDef="defaultColDef"
            :autoGroupColumnDef="autoGroupColumnDef"
            :groupDefaultExpanded="-1"
            :rowData="rowData"
            :getDataPath="getDataPath"
            @cell-clicked="onCellClicked"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import { treeData } from '@/mocks/tree';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import { TreeElement } from '@/types/tree';

export default Vue.extend({
    name: 'HomeView',
    components: {
        AgGridVue,
    },
    data() {
        return {
            defaultColDef: {
                flex: 1,
            },
            autoGroupColumnDef: {
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: () => {
                    return {
                        innerRenderer: ({ value }: { value: TreeElement }) =>
                            `<span class="tree-element_inner-block with-${value.type}-icon id-${value.id}">${value.title}</span>`,
                    };
                },
                valueGetter: (params: any) => {
                    return { ...params.data };
                },
            },
            rowData: treeData.items,
            getDataPath: (data: TreeElement) => {
                return data.hierarchy;
            },
        };
    },
    methods: {
        onCellClicked(event: { data: TreeElement }): void {
            const node = document.querySelector(
                `.id-${event.data.id}`
            ) as HTMLElement;
            node.style.color = '#fff';
            node.style.backgroundColor = 'gray'; // todo improve
        },
    },
});
</script>

<style scoped lang="less">
@import '@/styles/tree.less';
.hello {
    display: flex;
    flex-direction: column;
    height: 100%;
}
/deep/ .tree-element_inner-block {
    padding: 2px 10px 2px 0;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background-color: #efefef;
    }
    &.with-showcase-icon {
        &::before {
            color: transparent;
            content: 'icon';
            background: transparent
                url('https://www.ag-grid.com/example-assets/svg-icons/eye.svg')
                center/contain no-repeat;
        }
    }
    &.with-group-icon {
        &::before {
            color: transparent;
            content: 'icon';
            background: transparent
                url('https://www.ag-grid.com/example-assets/svg-icons/menu.svg')
                center/contain no-repeat;
        }
    }
    &.with-dataheap-icon {
        &::before {
            color: transparent;
            content: 'icon';
            background: transparent
                url('https://www.ag-grid.com/example-assets/svg-icons/aggregation.svg')
                center/contain no-repeat;
        }
    }
}
</style>
