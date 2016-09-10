angular.module('gunList', [])
.controller('inputController', inputFunction)
.controller('galleryController', galleryFunction)
.factory('armsFactory', factoryFunction);

function inputFunction (armsFactory) {
    var gCtrl=this;
    window.gCtrl = gCtrl;
    gCtrl.arms=armsFactory.armsList;
    console.log("gCtrl running");
    
    gCtrl.addArms = function(){
        console.log("attempting to add arms...");
        gCtrl.arms.push( gCtrl.newArms );
        gCtrl.newArms = {};
    };
}

function galleryFunction(armsFactory){
    
    var lCtrl = this;
    lCtrl.arms=armsFactory.armsList;
}

function factoryFunction(){
    armsList=[
        {
        
        model: 'NFA Class 3/Pre-1986 - Saco Defense M60-E6 Mk43 MOD0',
        image: 'http://i658.photobucket.com/albums/uu302/michaelkih/e837d8c7-e651-4360-8c5e-50a6f867673a_zpsec31ca24.jpg',
        price: '40000',
        caliber: '7.62x51mm NATO/.308 Winchester',
        
    },
        {
        
        model: 'FN Herstel SCAR-17H Carbine/Schmidt & Bender 3-12x50mm Scope',
        image: 'http://farm5.static.flickr.com/4126/5183267067_45a74a5bed_o.jpg',
        price: '6000',
        caliber: '7.62x51mm NATO/.308 Winchester',
        
    },
    {
        model: 'Springfield M21 Krieger/Nightforce NXS 3.5-15x50 Scope',
        image: 'http://i1063.photobucket.com/albums/t515/66Fastback1/Rifle1_zpsd317b247.jpg',
        price: '5500',
        caliber: '7.62x51mm NATO/.308 Winchester',
        
    },
        {
        model: 'NFA Class 3/SBR - Heckler & Kock MR556, 10.5" barrel/EO-Tech 553, L3/Insight PEQ-15 ',
        image: 'http://img4.hostingpics.net/pics/725236416flamsteedXA1.jpg',
        price: '5500',
        caliber: '300 BlackOut',
        },
        
    {
        model: 'Colt Python, 6" Blued',
        image: 'http://www.gunlistings.org/uploads/1_pistols_colt_python_1980_6_blue_with_original_box_nr_118031.jpg',
        price: '2500',
        caliber: '.357 Magnum/.38 Special',
        
    },
        {
        model: 'Wilson Combat CQB Elite 1911',
        image: 'http://www.hinterlandoutfitters.com/images/cqb-elite-1.jpg',
        price: '3000',
        caliber: '45ACP',
        
    },
            {
        model: 'Glock 20',
        image: 'http://14544-presscdn-0-64.pagely.netdna-cdn.com/wp-content/uploads/2015/08/Glock-20.jpg',
        price: '600',
        caliber: '10mm Auto',
        
    },
        


    ];
    return { armsList : armsList }
}