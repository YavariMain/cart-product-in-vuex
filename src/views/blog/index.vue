<template>
    <div class="home">
        <div class="container-xl">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 d-flex justify-content-center mb-3" v-for="item in list">
                    <template>
                        <b-card
                                :title="item.location"
                                :img-src="item.image"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2"
                                style="height: 300px;"
                        >
                            <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>

                            <b-button :href="`/blog/${item.slug}`" variant="primary">more ...</b-button>
                            <b-button href="#" variant="success" class="ml-1">add to cart</b-button>
                        </b-card>
                    </template>
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
                axios
                    .get('https://api.alibtob.com/en/apiv2/catalog/get-product-list?slug=manufacturing-processing-machinery&page=1')
                    .then(response => (this.list = response.data.data.data));
            }
        }
    }
</script>