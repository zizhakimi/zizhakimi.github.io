<template>
    <div class="w-full text-gray-700 relative">
        <Transition name="fade">
            <div v-if="!opened" class="cover-invitation fixed w-full top-0 bottom-0 right-0 left-0 z-30 backdrop-blur-lg bg-white/40">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-lg text-center p-8">
                    <h1 class="font-wedding text-wedding text-5xl">Welcome to Our Wedding</h1>

                    <button class="btn-wedding py-2 px-5 rounded-full shadow-lg shadow-black-500 mt-5" @click="openInvitation">
                        Buka Undangan &nbsp;
                        <font-awesome-icon icon="fa-envelope-circle-check" />
                    </button>
                </div>
            </div>
        </Transition>

        <div class="fixed z-10 top-0 bottom-0 right-0">
            <div class="w-full h-full flex flex-col items-end justify-end drop-shadow-lg text-center p-8">
                <button v-if="isPlaying" @click="offMusic" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg shadow-black-500 mt-5 flex items-center">
                    <Transition name="slide-fade">
                        <small v-if="isLabelShow" class="mr-2">Off Music</small>
                    </Transition>
                    <font-awesome-icon icon="fa-circle-stop" />
                </button>

                <button v-else @click="onMusic" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg shadow-black-500 mt-5 flex items-center">
                    <font-awesome-icon icon="fa-circle-play" />
                </button>
            </div>
        </div>

        <div class="p-8 bg-gray-50 flex justify-center section-1">
            <div class="w-full sm:w-3/4 rounded-md bg-wedding relative shadow-xl shadow-black-500"></div>
            <div class="absolute text-white left-10 md:left-8 top-10 md:top-40 text-center" style="z-index: 10">
                <h1 class="text-2xl md:text-7xl font-wedding font-semibold">
                    Aziz & Wery
                </h1>

                <p class="text-xl md:text-4xl font-wedding text-white">Wedding</p>
            </div>
            <div class="">
                <div class="blob w-20 md:w-50">
                <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                    <!-- <defs>
                        <linearGradient id="gradient">
                            <stop offset="14%" stop-color="#fc6b6b" />
                            <stop offset="65%" stop-color="#f77a7a" />
                            <stop offset="97%" stop-color="#fa4343" />
                        </linearGradient>
                    </defs> -->
                    <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                </svg>
                </div>
            </div>
        </div>

        <div class="text-left bg-gray-50 p-8 pb-16 -mt-48 flex flex-col md:flex-row justify-center">
            <div class="mt-48 w-full md:w-3/4 text-center">
                <h1>Assalamu'alaikum Warohmatullohi Wabarokatuh.</h1>
                <p class="mt-3">
                    Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
                </p>
                <p class="mt-6">
                    اَللَّهُمَ صَلِّ وَ سَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَ عَلَى آلِسَيِّدِنَا مُحَمَّدٍ, مِفْتَاحِ بَابِ رَحْمَةِ الله, عَدَدَ مَا فِي عِلْمِ الله, صَلَاةً وَسَلَا مًا دَائِمَيِنِ بِدَوَاومِ مُلْكِ الله
                </p>
               
                <h1 class="font-wedding text-4xl mt-16 text-wedding">
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                    <span class="mx-8">Mempelai</span>
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </h1>

                <div class="mt-14 text-center md:text-right flex flex-col md:flex-row items-center justify-between">
                    <div class="w-full md:w-1/2 pb-8 md:pr-8">
                        <h2 class="font-wedding text-4xl text-semibold text-gray-800">Muhammad Aziz Hakim </h2>
                        <a href="https://instagram.com/zizhakimi" target="blank" class="text-pink-500 underline underline-offset-2">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                            zizhakimi
                        </a>

                        <p class="text-sm mt-3 tracking-normal leading-relaxed text-center md:text-right text-gray-700">
                            Putra Pertama dari Bapak T. Agus Pujianto & Ibu Maryani

                        </p>
                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="w-full relative z-0">
                            <img src="@/assets/aziz.png" alt="" class="rounded-lg shadow-xl shadow-black-500">
                        </div>
                    </div>
                </div>

                <div class="mt-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
                    <div class="w-full md:w-1/2 hidden md:block">
                        <div class="w-full relative z-0">
                            <img src="@/assets/wery1.png" alt="" class="rounded-lg shadow-xl shadow-black-500">
                            <div class="">
                                <div class="blob-2 w-56 md:w-96">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 pb-8 md:pl-8">
                        <h2 class="font-wedding text-4xl text-semibold text-gray-800">Wery Rahmawati
</h2>
                        <a href="https://instagram.com/weryrahmawatii" target="blank" class="text-pink-500 underline underline-offset-2">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                            weryrahmawatii
                        </a>

                        <p class="text-sm mt-3 tracking-normal leading-relaxed text-center md:text-left text-gray-700">
                            Putri Pertama dari Bapak Dan Jhonson dan Ibu Barkah

                        </p>
                    </div>
                    <div class="w-full md:w-1/2 block md:hidden">
                        <div class="w-full relative z-0">
                            <img src="@/assets/wery1.png" alt="" class="rounded-lg shadow-xl shadow-black-500">
                            <div class="">
                                <div class="blob-2 w-56 md:w-80">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center p-8 section-3 flex flex-col md:flex-row justify-center">
            <div class="text-white w-full md:w-2/4 p-8 text-center rounded-lg backdrop-blur-sm bg-white/40">
                <p class="drop-shadow-lg">Dear{{ getCaller }},</p>
                <h1 class="mt-5 drop-shadow-lg"><span class="font-wedding text-semibold text-5xl">{{ name }}</span></h1>
                <hr>
                <p class="drop-shadow-lg my-5">
                    Tanpa mengurangi rasa hormat, izinkan kami mengundang dan berbagi momen paling
                    berbahagia untuk menghadiri resepsi pernikahan kami melalui undangan :
                </p>
                
                <h2 class="font-wedding text-5xl mt-16 tex- wedding">
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                    <span class="mx-8">Akad</span> 
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </h2>
                <p>  <span class="font-bold text-1xl">Jam 09.00 Minggu, 6 Agustus 2023</span> <br><br> </p>
                <h3>  <span class="font-bold text-1xl">Bertempat di </span> <br> <br> </h3>
                <h3>  <span class="font-bold text-1xl">Masjid Jami' Annur </span> <br> <br> </h3>
                <h3>  <span class="font-bold text-1xl">  Jl Percetakan Negara VII No. 14 Jakarta Pusat"</span> <br><br> </h3>

                <h4 class="font-wedding text-5xl mt-16 tex- wedding">
                    <!-- <font-awesome-icon icon="fa-solid fa-ellipsis" /> -->
                    <span class="mx-8">Resepsi.</span> 
                    <!-- <font-awesome-icon icon="fa-solid fa-ellipsis" /> -->
                </h4>
                <p>  <span class="font-bold text-1xl">Jam 11.00 s.d 16.00</span> </p>
                <p>  <span class="font-bold text-1xl">Minggu, 6 Agustus 2023</span> <br><br> </p>
                <h5>  <span class="font-bold text-1xl">Bertempat di : </span> <br><br> </h5>
                <h5>  <span class="font-bold text-1xl">Balai Warga RW 04 Rawasari, Jakarta Pusat"</span> <br><br> </h5>
                <h5>  <span class="font-bold text-1xl">Jl. Percetakan Negara IX A No.75, RT.5/RW.4,
                    Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570 </span> <br><br> </h5>
                    

                <div class="mt-14">
                    <p>Live Countdown</p>
                    <p id="countdown" class="text-2xl"></p>
                </div>
            </div>

            <!-- <div class="w-full md:w-2/4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534.1675815116455!2d106.86997136200172!3d-6.221837098980891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f37945c5e99f%3A0x938e2851cfe026c0!2sRptra%20Citra%20Permata!5e0!3m2!1sen!2sid!4v1652105023617!5m2!1sen!2sid"" width="100%" height="100%" style="border:0; min-height: 300px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> -->
        </div>

        <div class="text-center bg-gray-50 p-8 py-16 flex flex-col items-center justify-center">
            <div class="w-full md:w-3/4">
                <h1 class="">Cerita Singkat Kita.</h1>

                <div class="mt-14 flex flex-col md:flex-row items-center justify-center text-gray-700">
                    <div class="w-full md:w-2/4">
                        <h2 class="font-wedding text-5xl">Awal <span class="text-gray-500">Pertemuan</span> </h2>
                        <p class="mt-5 leading-relaxed text-justify md:text-right pb-8 md:pr-8">
                             Pertemuan pertama kita pada tahun 2013 di SMKN 14 Jakarta dimana kita satu kelas pada kelas 10,
                             yang berawalnya menjadi teman, lalu menjadi teman yang sangat dekat, 
                             menjadi tempat berbagi senang maupun tempat berkeluh kesah. <br> <br>

                            Dengan seiring berjalannya waktu, hari demi hari, minggu demi minggu, tahun demi tahun, 
                            kita masih tetap bersama melalui siklus masa remaja hingga masa dewasa, 
                            lalu kita mempunyai keinginan untuk membawa hubungan ini lebih serius, 
                            demi menggapai berkah dan ridho dari Allah SWT. 

                        </p>
                    </div>
                    <div class="w-full md:w-2/4">
                        <img src="@/assets/dudukberdua.jpg" class="w-full rounded-lg shadow-lg shadow-black-500">
                    </div>
                </div>
            </div>

            <div class="w-full md:w-3/4 mt-16">
                <div class="mt-14 flex flex-col md:flex-row items-center justify-center">
                    <div class="w-full md:w-2/4 hidden md:block">
                        <img src="@/assets/fotojongkok.jpg" class="w-full rounded-lg shadow-lg shadow-black-500">
                    </div>
                    <div class="w-full md:w-2/4 text-gray-700">
                        <h2 class="font-wedding text-5xl">Lamaran<span class="text-pink-500"></span> </h2>
                        
                        <p class="mt-5 leading-relaxed text-justify md:text-left pb-8 md:pl-8">
                           Pada hari Sabtu, 04 Desember 2021, kita menggelar acara lamaran, pada saat itu pertama kalinya kedua keluarga kita bertemu.
                           Kita saling mengikat janji satu sama lain dengan cincin yang melekat pada jari kita berdua. <br> <br>
                        Bulan Desember akan selalu menjadi cerita penuh makna dan cinta. Selalu bersyukur kepada Allah SWT kita dipertemukan pada waktu yang tepat. <br> <br>
                        </p>
                    </div>
                    <div class="w-full md:w-2/4 block md:hidden">
                        <img src="@/assets/fotojongkok.jpg" class="w-full rounded-lg shadow-lg shadow-black-500">
                    </div>
                </div>
            </div>

            <div class="w-full md:w-3/4 mt-16">
                <div class="mt-14 flex justify-center">
                    <div class="w-full text-gray-700">
                       
                        
                        <p class="mt-5 leading-relaxed text-justify md:text-center pb-8 md:pl-8">
                            Cerita ini akan terus berlanjut, lembar demi lembar kehidupan akan siap kita hadapi.
                            Bersyukur kepada Allah SWT atas kuasanya yang memampukan kita untuk tetap bersama selamanya^^
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full p-8 py-24 section-1 flex justify-center">
            <div class="text-center w-full md:w-3/4 flex-col items-center justify-center">
                <div class="w-full flex-col md:flex-row flex items-center justify-between mb-24">
                    <div class="w-full md:w-1/3 mb-5 md:mb-0">
                        <div class="w-1/4 mx-auto md:mr-auto p-32 section-footer rounded-full"></div>
                    </div>
                    <div class="relative w-full md:w-2/3 border border-gray-700 backdrop-blur-sm bg-gray/20 rounded-lg p-8">
                        <div class="absolute top-0 left-0 p-3 text-lg font-bold flex items-center">
                            <div class="mr-8">
                                <font-awesome-icon icon="fa-gift" />
                            </div>

                            <div class="flex items-center">
                                <a @click="toggleUser('r')" :class="isRizky ? 'border border-blue-500 text-blue-500 rounded-full' : 'bg-gray-200 text-gray-400 rounded-full'" class="cursor-pointer px-4 mr-3">
                                    <font-awesome-icon icon="fa-child" />
                                </a>

                                <a @click="toggleUser('s')" :class="isSyifa ? 'border border-pink-500 text-pink-500 rounded-full' : 'bg-gray-200 text-gray-400 rounded-full'" class="cursor-pointer px-4 mr-3">
                                    <font-awesome-icon icon="fa-child-dress" />
                                </a>
                            </div>
                        </div>
                        
                        <div class="float-left">
                            <Transition name="fade-quick">
                                <div v-if="isRizky" key="1" class="w-full flex flex-col md:flex-row justify-between items-center mt-6">
                                    <div class="w-full md:w-1/2 mb-5 md:mb-0">
                                        <img src="@/assets/bca aziz.jpg" class="w-full rounded-lg">
                                    </div>

                                    <div class="w-full md:w-1/2">
                                        <div class="flex justify-center items-center">
                                            <p class="font-extrabold text-sm">
                                                BCA - 52 4515 3942
                                            </p>
                                            <button @click="copyNumber('52 4515 3942')" class="relative ml-3 bg-gray-500 hover:bg-gray-700 rounded-full p-2 text-white text-sm flex items-center shadow-lg shadow-gray-300" title="Salin">
                                                <font-awesome-icon icon="fa-copy" />
                                                <p v-if="copied" class="absolute left-8 text-sm bg-gray-700 opacity-60 px-1 py-1 rounded">Copied!</p>
                                            </button>
                                        </div>
                                        <p class="text-sm">a/n Muhammad Aziz Hakim</p>
                                    </div>
                                </div>

                                <div v-else key="2" class="w-full flex flex-col md:flex-row justify-between items-center mt-6">
                                    <div class="w-full md:w-1/2 mb-5 md:mb-0">
                                        <img src="@/assets/bca wery.jpg" class="w-full rounded-lg">
                                    </div>

                                    <div class="w-full md:w-1/2">
                                        <div class="flex justify-center items-center">
                                            <p class="font-extrabold text-sm">
                                                BCA - 49 6041 4590
                                            </p>
                                            <button @click="copyNumber('4960414590')" class="relative ml-3 bg-gray-500 hover:bg-gray-700 rounded-full p-2 text-white text-sm flex items-center shadow-lg shadow-gray-300" title="Salin">
                                                <font-awesome-icon icon="fa-copy" />
                                                <p v-if="copied" class="absolute left-8 text-sm bg-gray-700 opacity-60 px-1 py-1 rounded">Copied!</p>
                                            </button>
                                        </div>
                                        <p class="text-sm">a/n Wery Rahmawati</p>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>

                <h1 class="font-wedding text-4xl">Terima kasih.</h1>
                <p>Semoga sehat selalu, dan sampai bertemu di tempat kami!</p>

                <div class="w-full">
                    <img src="@/assets/protocol.png" class="w-full md:w-1/2 mx-auto">
                </div>
            </div>
        </div>

        <div class="text-center bg-white-800 p-8 flex flex-col items-center justify-center">
            <p class="text-white-400 mb-5">2023 &copy; Built and Designed by Jagur's <span class="text-pink-500"><font-awesome-icon icon="fa-solid fa-heart" /></span></p>
            <hr class="w-full border-1 border-gray-300">

            <h1 class="text-gray-600 mt-5">Lokasi Resepsi</h1>
            <br> "Balai Warga & Sekretariat RW 4 Rawasari" <br>
            <br> "Jl. Percetakan Negara IX A No.75, RT.5/RW.4, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570"
                 <br> 
                 <br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.545666945527!2d106.86078257429673!3d-6.191492493796157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5dba3ed4307%3A0x8af2fe5a267fc255!2sSekretariat%20RW%2004%20Rawasari!5e0!3m2!1sen!2sid!4v1687160343733!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br>
        
            

           
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            type: '',
            schedule: '',
            countdown: '',
            opened: false,
            audio: new Audio(),
            isPlaying: false,
            isLabelShow: true,
            copied: false,
            isRizky: false,
            isSyifa: false
        }
    },
    computed: {
        getCaller() {
            if (this.type == '2') {
                return ' Saudara/i'
            } else if (this.type == '1') {
                return ' Bapak/Ibu'
            } else {
                return ''
            }
        },
        getEvent() {
            if (this.schedule == '29') {
                return 'Akad dan Resepsi.'
            } else if (this.schedule == '4') {
                return 'Akad  dan Resepsi.'
            }

            return 'Akad dan Resepsi.'
        },


    },
    methods: {
        getCountdown() {
            // Set the date we're counting down to
            var countDownDate = new Date("Aug 6, 2023 09:00:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                document.getElementById('countdown').innerHTML = days + " Hari, " + hours + " Jam, " + minutes + " Menit, " + seconds + "s ";

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    this.countdown = "EXPIRED";
                }
            }, 1000)
        },
        openInvitation() {
            this.opened = true
            this.audio.src = require("../assets/amin_paling_serius.mp3")
            this.audio.volume = 0.1
            this.onMusic()

            window.setTimeout(() => {
                this.isLabelShow = false
            }, 4000)
        },
        offMusic() {
            this.isPlaying = false
            this.audio.pause()
        },
        onMusic() {
            this.isPlaying = true
            this.audio.play()
        },
        copyNumber(text) {
            this.copied = true
            navigator.clipboard.writeText(text)

            window.setTimeout(() => {
                this.copied = false
            }, 2000)
        },
        toggleUser(user) {
            if (user == 'r') {
                this.isRizky = true
                this.isSyifa = false
            } else {
                this.isSyifa = true
                this.isRizky = false
            }
        }
    },
    mounted() {
        let params = (new URL(document.location)).searchParams;
        this.name = params.get("n");
        this.type = params.get("t");
        this.schedule = params.get("s");

        if (this.schedule == '29') {
            this.isSyifa = true
            this.isRizky = false
        } else {
            this.isRizky = true
            this.isSyifa = false
        }

        this.getCountdown()
    }
}
</script>

<style scoped>
    .section-1 {
        background: url('@/assets/bg-1.jpeg') no-repeat center;
        background-size: cover;
    }

    .section-3 {
        background: url('@/assets/tenda1.JPG') no-repeat right center;
        background-size: cover;
    }

    .section-footer {
        background: url('@/assets/foot banner.jpg') no-repeat left center;
        background-size: cover;
    }

    .bg-wedding {
        background: url('@/assets/banner.JPG') no-repeat center;
        background-size: cover;
        height: 12rem;
    }

    /* breakpoint */
    @media only screen and (min-width: 768px) {
        .bg-wedding { 
            height: 30rem;
        }
    }


    .font-wedding {
        font-family: 'Great Vibes';
    }

    .text-wedding {
        color: #fc6b6b;
    }

    .btn-wedding {
        background-color: #fc6b6b;
        color: white;
    }

    .blob {
        position: absolute;
        top: 0;
        left: 0;
        fill: #fc6b6b;
        /* width: 22rem; */
        /* fill: linear-gradient(90deg, rgba(252,110,248,1) 0%, rgba(250,121,250,1) 35%, rgba(186,0,255,1) 100%); */
        animation: move 10s ease-in-out infinite;
        transform-origin: 50% 50%;
    }

    .blob-2 {
        position: absolute;
        top: 0;
        left: 0;
        fill: #fc6b6b;
        z-index: -1;
        animation: move_2 10s ease-in-out infinite;
        transform-origin: 50% 50%;
        overflow: hidden;
    }

    @keyframes move {
        0%   { transform: scale(1)   translate(10px, -30px); }
        50% { transform: scale(1)   translate(100px, 30px); }
        100% { transform: scale(1)   translate(10px, -30px); }
    }

    @keyframes move_2 {
        0%   { transform: scale(1)   translate(30px, -60px); }
        50% { transform: scale(1)   translate(98px, 100px); }
        100% { transform: scale(1)   translate(30px, -60px); }
    }

    /* we will explain what these classes do next! */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    .fade-quick-enter-active{
        transition: opacity 1s ease;
    }
    .fade-quick-leave-active {
    
    }

    .fade-quick-enter,
    .fade-quick-leave-to {
        opacity: 0;
    }
</style>
