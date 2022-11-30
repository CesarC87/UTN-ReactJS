import { rest } from 'msw'

const api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
const language = 'es-MX'

export const handlers = [
    rest.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=terminator&language=${language}`, (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "page": 1,
                    "results": [
                        {
                            "adult": false,
                            "backdrop_path": "/g4a5YLWwi6OCp8TcvxsUNrXMbN5.jpg",
                            "genre_ids": [
                                878,
                                28,
                                53,
                                12
                            ],
                            "id": 87101,
                            "original_language": "en",
                            "original_title": "Terminator Genisys",
                            "overview": "Cuando John Connor, líder de la resistencia humana, envía al sargento Kyle Reese a 1984 para proteger a Sarah Connor y salvaguardar el futuro, un giro inesperado de los acontecimientos crea una fracturada línea temporal.",
                            "popularity": 92.498,
                            "poster_path": "/vky6H7mCBjSsg1GMGJtJpGUeVS1.jpg",
                            "release_date": "2015-06-23",
                            "title": "Terminator: Génesis",
                            "video": false,
                            "vote_average": 5.9,
                            "vote_count": 7411
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
                            "genre_ids": [
                                878,
                                28,
                                12
                            ],
                            "id": 290859,
                            "original_language": "en",
                            "original_title": "Terminator: Dark Fate",
                            "overview": "Sarah Connor y el Terminator T-800 regresan con sus icónicas interpretaciones en Terminator: Destino Oculto, La película sirve como una secuela a Terminator 2, dejando de lado todo lo sucedido de la tercera a la quinta parte. De ser el caso, Terminator 6: Destino ocuto iniciaría tomando en cuenta los siguientes hechos: el T-1000 ha sido destruido, también el T-800 que se sacrificó por la humanidad. Sarah Connor y su hijo John están vivos y el Día del Juicio, quizás, pueda ser evitado. Se cree que a partir de un pedazo del T-800 el Terminator será “resucitado” por Sarah para ayudarles a sobrevivir de una nueva amenaza",
                            "popularity": 63.431,
                            "poster_path": "/k7PuHoj2oE7nEHExwliF2FSXFnr.jpg",
                            "release_date": "2019-10-23",
                            "title": "Terminator: Destino oculto",
                            "video": false,
                            "vote_average": 6.5,
                            "vote_count": 4241
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/5tKiuZvvV1lic7v65rdoGPmoOvf.jpg",
                            "genre_ids": [
                                28,
                                878,
                                53
                            ],
                            "id": 534,
                            "original_language": "en",
                            "original_title": "Terminator Salvation",
                            "overview": "En 2018, una misteriosa nueva arma en la guerra contra las máquinas, mitad humana y mitad máquina, llega a John Connor en la víspera de un ataque de la resistencia a Skynet. ¿Pero de qué lado está, y se puede confiar en él?",
                            "popularity": 59.227,
                            "poster_path": "/rgNYnAT16rn592QjjxJ1zRB5uoG.jpg",
                            "release_date": "2009-05-20",
                            "title": "Terminator: Salvación",
                            "video": false,
                            "vote_average": 6,
                            "vote_count": 5616
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/ahUaAgnkFu7QlBh5h4LCNeaSurV.jpg",
                            "genre_ids": [
                                28,
                                53,
                                878
                            ],
                            "id": 218,
                            "original_language": "en",
                            "original_title": "The Terminator",
                            "overview": "Los Ángeles, año 2029. Las máquinas dominan el mundo. Los rebeldes que luchan contra ellas tienen como líder a John Connor, un hombre que nació en los años ochenta. Para acabar con la rebelión, las máquinas deciden enviar al pasado a un robot -Terminator- cuya misión será eliminar a Sarah Connor, la madre de John, e impedir así su nacimiento.",
                            "popularity": 57.736,
                            "poster_path": "/kbPqRWsGS1siVUeEFVtLKloTG0Y.jpg",
                            "release_date": "1984-10-26",
                            "title": "Terminator: El exterminador",
                            "video": false,
                            "vote_average": 7.6,
                            "vote_count": 10960
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg",
                            "genre_ids": [
                                28,
                                53,
                                878
                            ],
                            "id": 280,
                            "original_language": "en",
                            "original_title": "Terminator 2: Judgment Day",
                            "overview": "Sarah Connor, la madre soltera del rebelde John Connor, está ingresada en un psiquiátrico. Algunos años antes, un viajero del tiempo le había revelado que su hijo sería el salvador de la humanidad en un futuro dominado por las máquinas. Se convirtió entonces en una especie de guerrera y educó a su hijo John en tácticas de supervivencia. Esta es la razón por la que está recluida en un manicomio. Cuando un nuevo androide mejorado, un T-1000, llega del futuro para asesinar a John, un viejo modelo T-800 será enviado para protegerle.",
                            "popularity": 81.091,
                            "poster_path": "/qtgdiEwBDdyyMj241DURRCiD5se.jpg",
                            "release_date": "1991-07-03",
                            "title": "Terminator 2: Juicio Final",
                            "video": false,
                            "vote_average": 8.1,
                            "vote_count": 10836
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/kbXMOnz2RhTSAbLtHX5hy5AXtwv.jpg",
                            "genre_ids": [
                                28,
                                53,
                                878
                            ],
                            "id": 296,
                            "original_language": "en",
                            "original_title": "Terminator 3: Rise of the Machines",
                            "overview": "Ha pasado una década desde que John Connor -Nick Stahl- salvara a la humanidad de la destrucción. En la actualidad John tiene 25 años y vive en la clandestinidad: no hay ninguna prueba documental de su existencia. Así evita ser rastreado por Skynet -la sofisticada corporación de máquinas que una vez intentó acabar con su vida-. Pero, ahora, desde el futuro, ha sido enviado el T-X (Kristanna Loken), la máquina destructora cyborg más desarrollada de Skynet. Su misión es completar el trabajo que no pudo terminar su predecesor, el T-1000. El T-X es una máquina tan implacable como bello su aspecto humano. Ahora la única esperanza de sobrevivir para Connnor es Terminator.",
                            "popularity": 39.867,
                            "poster_path": "/ugVNhnnH3DKUZZ3JtzRkViIh4L9.jpg",
                            "release_date": "2003-07-02",
                            "title": "Terminator 3: La rebelión de las máquinas",
                            "video": false,
                            "vote_average": 6.1,
                            "vote_count": 5664
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                28,
                                12,
                                14
                            ],
                            "id": 576605,
                            "original_language": "en",
                            "original_title": "Mortal Kombat: Terminator",
                            "overview": "",
                            "popularity": 6.068,
                            "poster_path": "/6rUGUUVvA9U8V9JI5Vay8mkyMdJ.jpg",
                            "release_date": "1998-10-03",
                            "title": "Mortal Kombat: Terminator",
                            "video": false,
                            "vote_average": 6,
                            "vote_count": 11
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/2JNljYdphbMWX1Yq2JuusKvJyJc.jpg",
                            "genre_ids": [
                                16,
                                28,
                                12
                            ],
                            "id": 222148,
                            "original_language": "en",
                            "original_title": "Terminator: Salvation The Machinima Series",
                            "overview": "",
                            "popularity": 11.184,
                            "poster_path": "/aWX62gBQVpCJ1zOkMgqGx9o8Sli.jpg",
                            "release_date": "2009-05-18",
                            "title": "Terminator: Salvation The Machinima Series",
                            "video": false,
                            "vote_average": 6.4,
                            "vote_count": 19
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/gdIcVTZj0cxLm0EWHOLTiqVLp9I.jpg",
                            "genre_ids": [
                                28
                            ],
                            "id": 40027,
                            "original_language": "en",
                            "original_title": "Ninja Terminator",
                            "overview": "",
                            "popularity": 3.931,
                            "poster_path": "/5YkYpKxTQVq4gna3qTztwwwo8YF.jpg",
                            "release_date": "1985-01-01",
                            "title": "Ninja Terminator",
                            "video": false,
                            "vote_average": 6,
                            "vote_count": 31
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/eNO76RvyKyzrEY4nhhtzM8feBng.jpg",
                            "genre_ids": [
                                28,
                                35,
                                878
                            ],
                            "id": 717823,
                            "original_language": "ru",
                            "original_title": "Terminator 5: Смерть Голливуда",
                            "overview": "",
                            "popularity": 2.286,
                            "poster_path": "/7K84p0Tgo9wnR7ReBwnOoVfmXTk.jpg",
                            "release_date": "2004-01-01",
                            "title": "Terminator 5: Смерть Голливуда",
                            "video": false,
                            "vote_average": 7.2,
                            "vote_count": 5
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                28,
                                53
                            ],
                            "id": 55459,
                            "original_language": "en",
                            "original_title": "Terminator Woman",
                            "overview": "",
                            "popularity": 2.128,
                            "poster_path": "/eGAxBO3RuDgkbxv9ul03SSjkiOO.jpg",
                            "release_date": "1992-06-30",
                            "title": "Terminator Woman",
                            "video": false,
                            "vote_average": 4.4,
                            "vote_count": 6
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/9L21PeX8Sl79svpf0zgMhgLC3rV.jpg",
                            "genre_ids": [
                                878,
                                27
                            ],
                            "id": 133360,
                            "original_language": "en",
                            "original_title": "Alien Terminator",
                            "overview": "",
                            "popularity": 2.72,
                            "poster_path": "/4LsdnTWNmgtuzPWyUGmmyBoRmf0.jpg",
                            "release_date": "1996-10-09",
                            "title": "Alien Terminator",
                            "video": false,
                            "vote_average": 4.3,
                            "vote_count": 18
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/tLAYqqrkaQzi6JgaSLJvfTwil1J.jpg",
                            "genre_ids": [
                                99
                            ],
                            "id": 503718,
                            "original_language": "en",
                            "original_title": "T2: Reprogramming The Terminator",
                            "overview": "",
                            "popularity": 3.374,
                            "poster_path": "/vQUbuyFslWuRfCd44uaba9Qf0ev.jpg",
                            "release_date": "2017-11-23",
                            "title": "T2: Reprogramming The Terminator",
                            "video": false,
                            "vote_average": 7.9,
                            "vote_count": 10
                        },
                        {
                            "adult": false,
                            "backdrop_path": "/kWH43qHgNatlZ1DEpuxqNqiRbbO.jpg",
                            "genre_ids": [
                                99
                            ],
                            "id": 473793,
                            "original_language": "en",
                            "original_title": "The Making of 'Terminator 2: Judgment Day'",
                            "overview": "",
                            "popularity": 6.462,
                            "poster_path": "/m0k3vRqh4eVZONufDahNufHi8Em.jpg",
                            "release_date": "1991-01-01",
                            "title": "The Making of 'Terminator 2: Judgment Day'",
                            "video": false,
                            "vote_average": 6.8,
                            "vote_count": 14
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                28,
                                878,
                                53
                            ],
                            "id": 233341,
                            "original_language": "en",
                            "original_title": "Terminator the Second",
                            "overview": "",
                            "popularity": 1.17,
                            "poster_path": null,
                            "release_date": "2013-11-01",
                            "title": "Terminator the Second",
                            "video": false,
                            "vote_average": 4.8,
                            "vote_count": 7
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                28,
                                35,
                                27
                            ],
                            "id": 965618,
                            "original_language": "fi",
                            "original_title": "Video Cop: Terminator Commando",
                            "overview": "",
                            "popularity": 0.969,
                            "poster_path": "/ge2YeTh5DpdxzS32u1eHPIGV36w.jpg",
                            "release_date": "2017-08-25",
                            "title": "Video Cop: Terminator Commando",
                            "video": false,
                            "vote_average": 0,
                            "vote_count": 0
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                99
                            ],
                            "id": 530841,
                            "original_language": "en",
                            "original_title": "Other Voices: Creating 'The Terminator'",
                            "overview": "",
                            "popularity": 1.96,
                            "poster_path": "/68Z9fY7XjLsUDqVyoMSLR1fwpkw.jpg",
                            "release_date": "2001-03-19",
                            "title": "Other Voices: Creating 'The Terminator'",
                            "video": false,
                            "vote_average": 6.3,
                            "vote_count": 2
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                28
                            ],
                            "id": 1017976,
                            "original_language": "nl",
                            "original_title": "Terminator Too – The Movie",
                            "overview": "",
                            "popularity": 1.541,
                            "poster_path": "/peLZNcEv0ouZ2MHOmgvpTWGWgWY.jpg",
                            "release_date": "2022-09-02",
                            "title": "Terminator Too – The Movie",
                            "video": false,
                            "vote_average": 0,
                            "vote_count": 0
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                18,
                                28,
                                80
                            ],
                            "id": 353425,
                            "original_language": "en",
                            "original_title": "Boyong Mañalac: Hoodlum Terminator",
                            "overview": "",
                            "popularity": 1.501,
                            "poster_path": "/hOgPV0cyrE2YvkovIIMYz1RVuDR.jpg",
                            "release_date": "1991-06-20",
                            "title": "Boyong Mañalac: Hoodlum Terminator",
                            "video": false,
                            "vote_average": 8.5,
                            "vote_count": 2
                        },
                        {
                            "adult": false,
                            "backdrop_path": null,
                            "genre_ids": [
                                878,
                                28,
                                16,
                                14
                            ],
                            "id": 354941,
                            "original_language": "en",
                            "original_title": "The Terminator: Hunters and Killers",
                            "overview": "",
                            "popularity": 1.781,
                            "poster_path": null,
                            "release_date": "2006-12-05",
                            "title": "The Terminator: Hunters and Killers",
                            "video": false,
                            "vote_average": 2,
                            "vote_count": 2
                        }
                    ],
                    "total_pages": 4,
                    "total_results": 68
                }
            )
        )
    })
]