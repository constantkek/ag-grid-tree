<template>
    <div class="hello">
        <div style="width: 100%; flex: 1 1 auto">
            <ag-grid-vue
                style="height: 90vh"
                treeData
                class="ag-theme-alpine"
                :defaultColDef="defaultColDef"
                :autoGroupColumnDef="autoGroupColumnDef"
                :groupDefaultExpanded="-1"
                :rowData="rowData"
                :getDataPath="getDataPath"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
import { treeData } from '@/mocks/tree';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-enterprise';
import { TreeElement } from '@/types/tree';
import TreeElementIconComponent from './TreeElementIconComponent.vue';

export default Vue.extend({
    name: 'HelloWorld',
    components: {
        AgGridVue,
        // eslint-disable-next-line vue/no-unused-components
        TreeElementIconComponent,
    },
    data() {
        return {
            defaultColDef: {
                flex: 1,
            },
            autoGroupColumnDef: {
                headerName: 'HeaderName',
                field: 'type',
                editable: false,
                cellRenderer: 'agGroupCellRenderer',
                // cellRendererSelector: (params: any) => {
                //     return {
                //         component: 'TreeElementIconComponent',
                //         params,
                //     };
                // },
                cellRendererParams: (params: any) => {
                    return {
                        innerRenderer: ({ value }: { value: TreeElement }) =>
                            `<span class="tree-element_inner-block-${value.type}">${value.title}</span>`,
                        // innerRendererFramework: TreeElementIconComponent,
                        // innerRendererParams: { data: params.data },
                    };
                },
                valueGetter: (params: any) => {
                    return { ...params.data };
                },
                // innerRenderer: function (params: any, etc: any) {
                //     console.log(params);
                //     console.log(etc);
                //     return '<i class="icon-showcase"></i>' + params.value;
                // },
                // cellRenderer: function (params: any, etc: any) {
                //     console.log(params);
                //     console.log(etc);
                //     return '<i class="icon-showcase"></i>' + params.value;
                // },
            },
            rowData: treeData.items,
            // columnDefs: [
            //     // {
            //     //     // showRowGroup: true,
            //     //     // cellRenderer: 'agGroupCellRenderer',
            //     //     // cellRendererParams: {
            //     //     //     innerRenderer: 'TreeElementIconComponent',
            //     //     // },
            //     //     headerName: 'HeaderName',
            //     //     // field: 'type',
            //     //     editable: false,
            //     //     cellRenderer: 'group',
            //     //     cellRendererParams: {
            //     //         innerRendererFramework: TreeElementIconComponent,
            //     //     },
            //     // },
            // ],
            getDataPath: (data: TreeElement) => {
                return data.hierarchy;
            },
        };
    },
});
</script>

<style lang="less">
.hello {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.icon {
    &-showcase {
        background: transparent
            url('https://www.ag-grid.com/example-assets/svg-icons/arrows.svg')
            center/contain no-repeat;
        color: transparent;
        &::before {
            content: '/f119';
        }
    }
}
.tree-element {
    &_inner-block {
        &-showcase {
            &::before {
                color: transparent;
                content: '/f119';
                background: transparent
                    url('https://www.ag-grid.com/example-assets/svg-icons/eye.svg')
                    center/contain no-repeat;
            }
        }
        &-group {
            &::before {
                color: transparent;
                content: '/f119';
                background: transparent
                    url('https://www.ag-grid.com/example-assets/svg-icons/menu.svg')
                    center/contain no-repeat;
            }
        }
        &-dataheap {
            &::before {
                color: transparent;
                content: '/f119';
                background: transparent
                    url('https://www.ag-grid.com/example-assets/svg-icons/aggregation.svg')
                    center/contain no-repeat;
            }
        }
    }
}
</style>
