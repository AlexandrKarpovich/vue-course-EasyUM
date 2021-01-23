Vue.component('item-add-form', {
    template: `
        <form class="d-flex w-100"> 
            <input class="form-control" v-model="label" />
            <button class="btn btn-outline-primary" type="button" v-on:click="onAdd">Добавить</button>
        </form>
    `,
    data: function() {
        return {
            label: '',
        }
    },
    methods: {
        onAdd: function () {
            this.$emit('on-add-item', this.label);
            this.label = '';
        }    
    }
})