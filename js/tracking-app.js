const { createApp } = Vue

createApp({

    data(){

        return {

            paket: app._data.paket,

            pengirimanList:
                app._data.pengirimanList,

            deliveryOrders: [],

            selectedPaket:'',

            form: {

                nim:'',
                nama:'',
                ekspedisi:'',
                tanggalKirim:''

            }

        }

    },

    computed: {

        generatedDO(){

            let nomor =
                this.deliveryOrders.length + 1

            let tahun =
                new Date().getFullYear()

            return `DO${tahun}-${String(nomor).padStart(3,'0')}`
        },

        paketDetail(){

            return this.paket.find(
                p =>
                p.kode == this.selectedPaket
            )
        }

    },

    methods: {

        addTracking(){

            if(
                !this.form.nim ||
                !this.form.nama ||
                !this.selectedPaket
            ){

                alert("Lengkapi data")
                return
            }

            this.deliveryOrders.push({

                nomorDO: this.generatedDO,

                nim: this.form.nim,

                nama: this.form.nama,

                ekspedisi: this.form.ekspedisi,

                paket: this.selectedPaket,

                tanggalKirim:
                    this.form.tanggalKirim,

                total:
                    this.paketDetail.harga

            })

            alert("DO berhasil dibuat")

            this.form = {

                nim:'',
                nama:'',
                ekspedisi:'',
                tanggalKirim:''

            }

            this.selectedPaket = ''

        }

    },

    watch: {

        selectedPaket(value){

            console.log(
                "Paket dipilih:",
                value
            )
        },

        'form.nama'(value){

            console.log(
                "Nama berubah:",
                value
            )
        }

    }

}).mount('#app')