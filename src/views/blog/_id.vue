<template>
    <div class="container-xl">
        <div class="row">
            <div class="col-xl-12">
                <div>
                    <b-card no-body class="overflow-hidden">
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img :src="list.image" alt="Image" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body :title="list.keyword">
                                    <b-card-text>
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </b-card-text>
                                    <b-button href="#" variant="success">add to cart</b-button>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import axios from 'axios';

    export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
        data() {
            return {
                list:[],
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            getData() {
                const slug = this.$route.params.id;
                axios.get('https://api.alibtob.com/en/apiv2/catalog/get-product-detail?slug=' + slug)
                    .then(response => (this.list = response.data.data));
                console.log(this.list)
            }
        }
    }
</script>