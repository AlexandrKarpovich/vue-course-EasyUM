Vue.component('todo-list', {
    template: `
        <ul class="list-group">
            <li v-for="item in todos" class="list-group-item d-flex justify-content-between align-items-center">
                {{ item.label }} 
                <button class="btn btn-outline-danger"type="buttton" @click="onDeleteItem(item)">Del</button>
            </li>
        </ul>
    `,
    props: [ 'todos' ],
    methods: {
        onDeleteItem: function (item) {
            this.$emit('on-delete-item', item);
        }
    },
});