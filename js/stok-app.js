const { createApp } = Vue

createApp({

    data(){

        return {

            stok: app._data.stok,

            upbjjList: app._data.upbjjList,

            kategoriList: app._data.kategoriList,

            selectedUPBJJ: '',

            selectedKategori: '',

            onlyWarning: false,

            sortBy: '',

            form: {

                kode:'',
                judul:'',
                kategori:'',
                upbjj:'',
                harga:'',
                qty:'',
                safety:''

            }

        }

    },

    computed: {

        filteredStok(){

            let data = [...this.stok]

            if(this.selectedUPBJJ){

                data = data.filter(
                    item =>
                    item.upbjj == this.selectedUPBJJ
                )
            }

            if(this.selectedKategori){

                data = data.filter(
                    item =>
                    item.kategori == this.selectedKategori
                )
            }

            if(this.onlyWarning){

                data = data.filter(
                    item =>
                    item.qty < item.safety
                )
            }

            if(this.sortBy == 'judul'){

                data.sort((a,b)=>
                    a.judul.localeCompare(b.judul)
                )
            }

            if(this.sortBy == 'qty'){

                data.sort((a,b)=>
                    a.qty - b.qty
                )
            }

            if(this.sortBy == 'harga'){

                data.sort((a,b)=>
                    a.harga - b.harga
                )
            }

            return data
        }

    },

    methods: {

        resetFilter(){

            this.selectedUPBJJ = ''
            this.selectedKategori = ''
            this.onlyWarning = false
            this.sortBy = ''

        },

        addData(){

            if(
                !this.form.kode ||
                !this.form.judul ||
                !this.form.kategori ||
                !this.form.upbjj
            ){

                alert("Semua field wajib diisi")
                return
            }

            this.stok.push({

                kode: this.form.kode,
                judul: this.form.judul,
                kategori: this.form.kategori,
                upbjj: this.form.upbjj,
                lokasiRak: "RAK-BARU",
                harga: Number(this.form.harga),
                qty: Number(this.form.qty),
                safety: Number(this.form.safety),
                catatanHTML: "<i>Data Baru</i>"

            })

            alert("Data berhasil ditambahkan")

            this.form = {

                kode:'',
                judul:'',
                kategori:'',
                upbjj:'',
                harga:'',
                qty:'',
                safety:''

            }

        }

    },

    watch: {

        selectedUPBJJ(value){

            console.log(
                "UPBJJ berubah:",
                value
            )
        },

        onlyWarning(value){

            console.log(
                "Filter warning:",
                value
            )
        }

    }

}).mount('#app')