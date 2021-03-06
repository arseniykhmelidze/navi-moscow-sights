    var map = new Object();
    var marker, i;
    var pos;
     
    var locations = [ // POA coordinate locations
            ["Московский Кремль", 55.752023, 37.617499], 
            ["Красная Площадь", 55.753908, 37.620843],
            ["Александровский сад", 55.751899, 37.613801],
            ["Большой театр", 55.760127, 37.618667],
            ["Отель Метрополь", 55.758391, 37.621684],
            ["Националь", 55.756702, 37.614113], 
            ["Российская государственная библиотека", 55.751770, 37.608879],
            ["Храм Христа Спасителя", 55.744639, 37.605519],
            ["Патриарший мост", 55.743482, 37.608400],
            ["Красный Октябрь", 55.740396, 37.609063],
            ["Болотная площадь", 55.745155, 37.616702],
            ["Гостиный Двор", 55.753592, 37.626021],
            ["Центральный Детский Магазин на Лубянке", 55.760159, 37.625109],
            ["ГУМ", 55.754694, 37.621341],
            ["Государственный исторический музей", 55.755340, 37.617933],
            ["Лубянка", 55.759660, 37.626581],
            ["Дом Арсения Морозова", 55.753267, 37.603572],
            ["Спасопесковская площадь", 55.750002, 37.587505],
            ["Дом Мельникова", 55.748098, 37.589405],
            ["Министерство иностранных дел России", 55.746113, 37.584483], 
            ["Большое Вознесение", 55.757715, 37.595711],
            ["Дом Горького", 55.758165, 37.596301],
            ["Патриаршие пруды", 55.763793, 37.592264],
            ["ГБУК Музей М.А Булгакова", 55.767006, 37.594046],
            ["Дом генерал-губернаторов (Мэрия Москвы)", 55.761451, 37.607876],
            ["Телеграф", 55.759693, 37.609301],
            ["Московская государственная консерватория имени П. И. Чайковского", 55.756184, 37.603884],
            ["Англиканская церковь Святого Андрея", 55.757991, 37.605055],
            ["Сандуны", 55.764265, 37.622103],
            ["Сад Эрмитаж", 55.770838, 37.609101],
            ["Усадьба Салтыковых-Чертковых", 55.760508, 37.631164],
            ["Самый старый жилой дом", 55.761497, 37.634815],
            ["Храм Архангела Гавриила", 55.762931, 37.639195],
            ["Чистые пруды", 55.761202, 37.644666],
            ["Дом-яйцо", 55.762771, 37.648984],
            ["Евангелическо-Лютеранский Кафедральный Собор Святых Петра И Павла", 55.756750, 37.640914],
            ["Морозовский садик", 55.755356, 37.643100],
            ["Солянка, доходники, галерея", 55.754050, 37.637596],                                             
            ["Иоанно-Предтеченский Женский Монастырь", 55.754618, 37.640032],
            ["Хитровка", 55.753210, 37.643569],
            ["Храм Трех Святителей На Кулишках", 55.754231, 37.644613],
            ["Kotelnicheskaya", 55.747228, 37.642799],
            ["Государственная Третьяковская галерея", 55.741413, 37.620832],
            ["Марфо-Мариинская обитель", 55.737667, 37.623216], 
            ["Парк искусств и Крымская набережная", 55.734770, 37.602980],
            ["Бункер-42 на Таганке", 55.741725, 37.649316],
            ["Государственный центральный музей современной истории России", 55.766178, 37.601641],
            ["Парк культуры и отдыха им. М.Горькогo", 55.728359, 37.601087],
            ["Новодевичий Монастырь", 55.726212, 37.556400],
            ["Нескучный сад", 55.717272, 37.587223],
            ["Донской монастырь", 55.714678, 37.601839],
            ["Спасо-Андроников монастырь", 55.749158, 37.670106],
            ["Арма завод", 55.760162, 37.662459], 
            ["Еврейский музей и центр толерантности", 55.789258, 37.607946],
            ["Российские ипподромы", 55.778975, 37.559516],
            ["Коломенское", 55.670421, 37.669621],
            ["Смотровая площадка на Воробьёвых горах", 55.709474, 37.542291],
            ["Выставка достижений народного хозяйства (ВДНХ)", 55.830982, 37.629811],
            ["Серебряный Бор", 55.779928, 37.413211],
            ["Кремль в Измайлово и вернисаж", 55.794198, 37.751063],
            ["ПКиО Кузьминки", 55.694984, 37.777558],
            ["Музей-заповедник Царицыно", 55.611675, 37.686224],
            ["Пушкинская площадь", 55.765493, 37.605686],
            ["Планетарий", 55.761369, 37.583719],
            ["Московский Зоопарк", 55.763256, 37.576652],
            ["МХТ", 55.760236, 37.613011],
            ["ГМИИ им. Пушкина", 55.747251, 37.605155],
            ["Музей-усадьба Островского А.Н.", 55.738846, 37.626254],
            ["Музей космонавтики", 55.822721, 37.639834],
            ["Музей современного искусства Гараж", 55.727776, 37.601708],
            ["Музей игровых автоматов", 55.761772, 37.621177],
            ["Музей Политех", 55.757270, 37.629894],
            ["Усадьба Кусково", 55.735295, 37.807463],
            ["Останкино", 55.819680, 37.611710],
            ["Соборная мечеть", 55.778834, 37.626983],
            ["Храм Баженова на Большой Ордынке", 55.741463, 37.624592],
            ["Шуховская башня", 55.717259, 37.611658],



            ["Цветной", 55.771175, 37.620075],
            ["Фаланстер", 55.762659, 37.606871],                                     
            ["Москва (книжный)", 55.762046, 37.609346],                                                                 
            ["Cosmotheca", 55.755370, 37.664694]                                                  
            ["Leform", 55.757608, 37.585663],
            ["КМ20", 55.761987, 37.624261],                                                 
            ["Сахарок", 55.757265, 37.595115], 
            ["Даниловский рынок", 55.712196, 37.620572], 
            ["Дорогомиловский рынок", 55.742722, 37.554368],                             
            ["LavkaLavka", 55.775955, 37.595792], 
            ["Grand Cru", 55.762732, 37.595222],                                                  
            ["ЦУМ", 55.760881, 37.619811],
            ["корабль Брюсов", 55.737490, 37.606830],
            ["Don Giulio Salumeria", 55.760204, 37.648050],


            ["Городская ферма на ВДНХ", 55.830976, 37.629800],
            ["Кидзания", 55.790326, 37.531204],                                            
            ["Океанариум", 55.832788, 37.618398],
            ["Центр фотографии братьев Люмьер", 55.739811, 37.609984], 
            ["Кинотеатр Пионер", 55.745032, 37.549869],
            ["Центр документального кино", 55.736399, 37.593141],
            ["Электротеатр Станиславский", 55.766230, 37.601634],
            ["Гоголь-центр", 55.762341, 37.662251],
            ["Зал Чайковского", 55.768834, 37.596282],



            ["Cандуновские бани", 55.764265, 37.622103],
            ["Бассейн Чайка", 55.736516, 37.596399],
            ["Birdie (женская)", 55.762681, 37.600362],
            ["Noir (скорее мужская)", 55.768464, 37.600956],
            ["тату-студия Faux Pas", 55.765273, 37.598377],
            ["беговой клуб в Парке Горького", 55.728139, 37.601592],
            ["Серебряный бор", 55.779946, 37.413254],
            ["Powerhouse", 55.745743, 37.646344],                     
            ["Yotaspace", 55.709595, 37.594476],
            ["Симачев", 55.762727, 37.614546],                        



            ["Деликатессен", 55.772430, 37.610992],
            ["Техникум", 55.760814, 37.614794],                       
            ["Южане", 55.768922, 37.642296], 
            ["Северяне", 55.756431, 37.606740], 
            ["Twins", 55.760108, 37.596496], 
            ["Воронеж", 55.744544, 37.601027], 
            ["BBQ Brisket", 55.742040, 37.583816],
            ["Strelka bar", 55.742575, 37.609241], 
            ["Time Out bar", 55.768739, 37.593798],
            ["Dr. Живаго", 55.756737, 37.614280], 
            ["White Rabbit", 55.747558, 37.581085], 
            ["Иерусалим (на крыше синагоги на Бронной)", 55.760191, 37.598074],
            ["Пушкин", 55.763688, 37.604985],
            ["Uilliam's", 55.762338, 37.595554],
            ["Чито-Ра (хинкальная)", 55.762184, 37.662827],                                      
            ["Mitzva (еврейская)", 55.745579, 37.627181],
            ["Кухня и общепит («новая еврейская»)", 55.778896, 37.600236],
            ["Хачапури (переработанная грузинская)",  55.763215, 37.605247],
            ["Вай мэ! (грузинский фаст-фуд)", 55.742882, 37.629778],
            ["Одесса-мама (домашняя одесская)", 55.761666, 37.636105],
            ["Москва-Дели (индийская)", 55.764224, 37.590505],
            ["Дружба (китайская)", 55.779995, 37.601078],
            ["Сutfish (японская)", 55.764100, 37.595134],
            ["Корё (северокорейская)", 55.708950, 37.593139], 
            ["Pinzeria by Bontempi (итальянская)", 55.746047, 37.602275],
            ["Кофемания на Большой Никитской", 55.756630, 37.604907],
            ["Энтузиаст", 55.763814, 37.614182], 
            ["Юность", 55.769704, 37.625502],                                 
            ["Искра (с секретным баром в подвале)", 55.805680, 37.584260], 
            ["Бутебродрная у Славика / Бутерборд", 55.768706, 37.597767],                                         
            ["Лепим и варим", 55.763158, 37.615021],
            ["Джелатерия Пломбир", 55.756807, 37.632235],
            ["Upside Down Cake", 55.773631, 37.586770],                       
            ["David B.", 55.764044, 37.598457],
            ["Noor Electro", 55.767018, 37.600775],  
            ["Drink your Seoul (+ Crabs)", 55.756994, 37.599708],
            ["Фаренгейт", 55.763116, 37.604592],                              
            ["Менделеев бар (+ Lucky Noodles)", 55.764129, 37.617281], 
            ["Beer Happens", 55.769709, 37.632544], 
            ["Все твои друзья", 55.762653, 37.606829],
            ["Бирмаркет", 55.765061, 37.608463],
            ["Дом 12", 55.740580, 37.593126],
            ["Bobby Dazzler Pub", 55.767533, 37.635230],
            ["Haggis", 55.763854, 37.616924]



    //            [Московское метро ??? (Нужно пояснение что под этим подразумевается: это одна станция / много станций? Как задать навиадрес)
    //            [Патриаршие
    //            [Китай-город
    //
          ];

    //////////////// MAIN FUNCTION INITIALIZATION ////////////////////////////////////////////////////////////////////////////////////

    function initMap() // Initializing map
    {    
       map = new google.maps.Map(document.getElementById('map_area'), 
        {
            center: {lat: 55.752023, lng: 37.617499}, // Moscow Kremlin
            zoom: 10
         });
                
        var infowindow = new google.maps.InfoWindow(
        {
            content: ""
        });
        
//////////////// CURSOR ////////////////////////////////////////////////////////////////////////////////////
 
        map.setOptions({ draggableCursor: 'default' });  // custom cursor
        
        
        
        
//////////////// GEOLOCATION ////////////////////////////////////////////////////////////////////////////////////
        
        if (navigator.geolocation) // Geolocation of the user
        {
            navigator.geolocation.getCurrentPosition(function(position) 
            {
                pos = 
                {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                marker = new google.maps.Marker(
                {
                    position: new google.maps.LatLng(pos),
                    icon: getUserMarker(3),
                    map: map
                });
                
                smoothZoom(map, 16, map.getZoom()); // first location identifier + zoom
                map.setCenter(pos);
                infowindow.setContent('You are here');
                infowindow.open(map, marker);
                
                google.maps.event.addListener(marker, 'click', (function(marker, i, event)    // opens location info on click
                {
                    return function() 
                    {
                        map.setCenter(pos);
                        smoothZoom(map, 16, map.getZoom()); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level
                        infowindow.setContent('You are here');
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                
                
                google.maps.event.addListener(map, 'click', function()   // close pins on random map click             
                {
                    infowindow.close();
                    marker.open = false;
                });
            }); 
        }
        
        
        
//////////////// POA LOCATION MARKERS ////////////////////////////////////////////////////////////////////////////////////


        for (i = 0; i < locations.length; i++) // Getting Markers For Locations
        {  
            marker = new google.maps.Marker(
            {
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: getCircle(3),
                map: map
            });
            
            google.maps.event.addListener(marker, 'click', (function(marker, i, event)    // opens location info on click
            {
                return function() 
                {
                    map.setCenter(marker.getPosition());
                    smoothZoom(map, 16, map.getZoom()); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
            
            google.maps.event.addListener(map, 'click', function()   // close pins on random map click             
            {
                infowindow.close();
                marker.open = false;
            });
        }
    } // End of initMap
    
    
    
    
    
    
//////////////// DESIGN FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////
    
    function getCircle(magnitude)  // Circle-designed location markers
    {
        var circle = 
        {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 1,
            scale: Math.pow(2, magnitude) / 2,
            strokeColor: 'blue',
            strokeWeight: .5
        };
        return circle;
    }
    
    
    function getUserMarker(magnitude)  // Custom user location marker
    {
        var user_marker = 
        {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'blue',
            fillOpacity: 3,
            scale: Math.pow(2, magnitude) / 2,
            strokeColor: 'yellow',
            strokeWeight: 2
        };
        return user_marker;
    }
    
    
//////////////// ADDITIONAL FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////
    
    function moveToLocation(e) // Moving to location of place from the list of POA
    {
        var sender = (e && e.target) || (window.event && window.event.srcElement);
        var div_id = sender.id.toString();
        var num = parseInt(div_id.split("_")[1]);
        map.moveTo(num);

    }
    
    function smoothZoom (map, max, cnt) // smooth zoom
    {
        if (cnt >= max) 
        {
            return;
        }
        
        else 
        {
            z = google.maps.event.addListener(map, 'zoom_changed', function(event)
            {
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function(){map.setZoom(cnt)}, 10);
        }
    }
    

////////////////// LIST OF ELEMENTS ////////////////////////////////////////////////////////////////////////////////////
//    function location_list()
//    {
//        var message = "";
//        
//        locations.forEach(function(location)
//        {            
//            message += "<div>" + locations[1] + "</div>";
//            document.getElementById("locaiton_list").innerHTML += message;
//        });
//    }
