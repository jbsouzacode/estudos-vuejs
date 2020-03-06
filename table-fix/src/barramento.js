import Vue from 'vue'
export default new Vue({
    methods:{
        setUserSel(e){
            this.$emit('x', e)
        },

        onUserSel(e){
            this.$on('x', e)
        }
    }
})