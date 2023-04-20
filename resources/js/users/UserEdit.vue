<template>
    <div style="width: 100%;"  class="p-5">
        User Edit
    </div>
</template>

<script>
export default {
    props: ['user'],
    components: {},
    data() {
        return {

        }
    },
    watch: {

    },
    computed: {

    },
    methods: {

    },
    beforeMount() {

    },
    mounted() {
        console.log('mounted', this.user);
    }
}
</script>
