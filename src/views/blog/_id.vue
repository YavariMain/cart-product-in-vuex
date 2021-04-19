<template>
    <div class="container-xl">
        <div class="row">
            <div class="col-xl-12">
                <div>
                    <b-card no-body class="overflow-hidden">
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img :src="product.image" alt="Image" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body :title="product.title">
                                    <b-card-text>
                                        {{product.preview_contetn}}
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
                product:[],
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            getData() {
                axios.get('https://blog-api.primexc.com/api/mag/news/' + this.$route.params.id)
                    .then(response => (this.product = response.data.result));
                console.log(this.product)
            }
        }
    }
</script>