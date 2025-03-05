// Mythium Archive: https://archive.org/details/mythium/

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });

        // initialize playlist and controls
        var index = 0,
            playing = false,
            basePath = '../Media/Gallery/Audios/', // Ruta base de los audios
            extension = '.ogg',
            categories = {
                "El Audio": [
                    { "track": 1, "name": "El Audio", "file": "imagen1" }
                ],
                "Buenos Días": [
                    { "track": 1, "name": "uyuy se despierta y escupe como no", "file": "imagen1" },
                    { "track": 2, "name": "besitoos hola holaa", "file": "imagen2" },
                    { "track": 3, "name": "holahola tiene sueñito", "file": "imagen3" },
                    { "track": 4, "name": "la bro tiene sueño x2", "file": "imagen4" },
                    { "track": 5, "name": "holaholahola UY", "file": "imagen5" },
                    { "track": 6, "name": "se rie mientras y se le cae un airpod", "file": "imagen6" },
                    { "track": 7, "name": "no me cato del sueño que tiene bro", "file": "imagen7" },
                    { "track": 8, "name": "tiene sueño y soy un negro", "file": "imagen8" },
                    { "track": 9, "name": "se acaba de despertar y durmió bieeennn", "file": "imagen9" }
                ],
                "EHHH": [
                    { "track": 1, "name": "se ríe y EHHH", "file": "imagen1" },
                    { "track": 2, "name": "EHHH PERO VAMOS A VER", "file": "imagen2" }
                ],
                "Eres rara": [
                    { "track": 1, "name": "Se le cayó el airpod", "file": "imagen1" },
                    { "track": 2, "name": "Aransam", "file": "imagen2" },
                    { "track": 3, "name": "glupglup aaaaaa", "file": "imagen3" },
                    { "track": 4, "name": "blablablabla", "file": "imagen4" },
                    { "track": 5, "name": "se rie? si tu", "file": "imagen5" },
                    { "track": 6, "name": "mmmm cremmmossooo", "file": "imagen6" },
                    { "track": 7, "name": "hay que foiar", "file": "imagen7" },
                    { "track": 8, "name": "la bro está enfadada", "file": "imagen8" },
                    { "track": 9, "name": "me escupe maaxximmoo", "file": "imagen9" },
                    { "track": 10, "name": "gracias nono gracias gracias", "file": "imagen10" },
                    { "track": 11, "name": "gonzalo torras punto punto", "file": "imagen11" },
                    { "track": 12, "name": "sigue teniendo sueño y jugo como no", "file": "imagen12" },
                    { "track": 13, "name": "más jugo y muere", "file": "imagen13" },
                    { "track": 14, "name": "mas jugo bro 😭 y ríe", "file": "imagen14" },
                    { "track": 15, "name": "me escupe", "file": "imagen15" },
                    { "track": 16, "name": "masca masca", "file": "imagen16" },
                    { "track": 17, "name": "mi poia está tremenda", "file": "imagen17" },
                    { "track": 18, "name": "está pensando?", "file": "imagen18" },
                    { "track": 19, "name": "es q no claro no", "file": "imagen19" },
                    { "track": 20, "name": "nadie sabe q pasa", "file": "imagen20" },
                    { "track": 21, "name": "pda pda pda pda", "file": "imagen21" },
                    { "track": 22, "name": "una pulga aventureraaa", "file": "imagen22" }
                ],
                "Te quiero": [
                    { "track": 1, "name": "hollaaaaaa", "file": "imagen1" },
                    { "track": 2, "name": "uyuyuy se picaaa", "file": "imagen2" },
                    { "track": 3, "name": "en conclusión me quiere (yo también)", "file": "imagen3" },
                    { "track": 4, "name": "cosa mona y escupe", "file": "imagen4" },
                    { "track": 5, "name": "eh no no es claro claro", "file": "imagen5" },
                    { "track": 6, "name": "te quiero mucho (uyuy mira como rie)", "file": "imagen6" },
                    { "track": 7, "name": "somos graciosoosss (no hacia falta oír tu pis)", "file": "imagen7" },
                    { "track": 8, "name": "telepatt mmaxximaaa", "file": "imagen8" },
                    { "track": 9, "name": "creo que me quiere", "file": "imagen9" },
                    { "track": 10, "name": "si me quiere (y yooo)", "file": "imagen10" },
                    { "track": 11, "name": "está flipando uuuuuuoaoaa", "file": "imagen11" },
                    { "track": 12, "name": "no se que es esto", "file": "imagen12" },
                    { "track": 13, "name": "se contiene?", "file": "imagen13" }
                ],
                "Cosas": [
                    { "track": 1, "name": "pum latigazo", "file": "imagen1" },
                    { "track": 2, "name": "bro aprende ya de verdad", "file": "imagen2" },
                    { "track": 3, "name": "esta super enfadada la bro", "file": "imagen3" },
                    { "track": 4, "name": "la bro tiró la sudadera que íbamos a conjunto", "file": "imagen4" },
                    { "track": 5, "name": "evidentemente no lo haría (la puta madre)", "file": "imagen5" },
                    { "track": 6, "name": "odiamos a tati", "file": "imagen6" },
                    { "track": 7, "name": "quiero mi sudadera", "file": "imagen7" },
                    { "track": 8, "name": "claro claro como no un negro", "file": "imagen8" }
                ],
            };

        // Función para formatear la duración a mm:ss
        function formatDuration(seconds) {
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        }

        // Obtener duración de cada audio
        function getAudioDuration(category, trackIndex, filePath, listItem) {
            var audio = new Audio(filePath);
            audio.addEventListener('loadedmetadata', function () {
                var duration = formatDuration(audio.duration);
                categories[category][trackIndex].duration = duration;
                listItem.find('.plLength').text(duration); // Actualiza la duración en la lista
            });
        }

        // Generar HTML para cada categoría y cargar duraciones
        $.each(categories, function (category, tracks) {
            $('#plList').append('<div class="category"><h3>' + category + '</h3><ul class="track-list" data-category="' + category + '"></ul></div>');
            var categoryList = $('#plList .category:last-child .track-list');
            $.each(tracks, function (key, value) {
                var filePath = `${basePath}${category}/${value.file}${extension}`;
                var listItem = $('<li data-category="' + category + '" data-index="' + key + '">' +
                    '<div class="plItem">' +
                    '<span class="plNum">' + value.track + '.</span>' +
                    '<span class="plTitle">' + value.name + '</span>' +
                    '<span class="plLength">Cargando...</span>' + // Placeholder hasta obtener la duración real
                    '</div></li>'
                );
                categoryList.append(listItem);
                getAudioDuration(category, key, filePath, listItem); // Obtener duración
            });
        });

        var npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < categories[currentCategory].length) {
                    index++;
                    loadTrack(currentCategory, index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(currentCategory, index);
                }
            }).get(0);

        var currentCategory = null; // Variable para almacenar la categoría seleccionada

        // Evento al hacer clic en un track de una categoría
        $('#plList').on('click', 'li', function () {
            var category = $(this).data('category'); // Obtener la categoría
            var trackIndex = $(this).data('index'); // Obtener el índice dentro de la categoría
            
            if (category && categories[category]) {
                currentCategory = category; // Guardamos la categoría seleccionada
                playTrack(category, trackIndex);
            }
        });

        function loadTrack(category, trackIndex) {
            var track = categories[category][trackIndex];

            if (!track) return; // Evita errores si no se encuentra el track

            $('.plSel').removeClass('plSel');
            $('li[data-category="' + category + '"][data-index="' + trackIndex + '"]').addClass('plSel');
            npTitle.text(track.name);
            index = trackIndex;
            audio.src = `${basePath}${category}/${track.file}${extension}`; // ✅ Ruta basada en la categoría
            updateDownload(audio.src);
        }

        function updateDownload(source) {
            player.on('loadedmetadata', function () {
                $('a[data-plyr="download"]').attr('href', source);
            });
        }

        function playTrack(category, trackIndex) {
            loadTrack(category, trackIndex);
            audio.play();
        }
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
