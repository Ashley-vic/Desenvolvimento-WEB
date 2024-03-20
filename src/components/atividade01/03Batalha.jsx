import { img_miranha, enemy_img } from "./Imagens"

function Hero ({name, img}){
    return <div style={{ width: "10rem" }}>
        Nome: {name}
        <img style={{ width: "100%" }} src={img} alt={name} />
    </div>
}

function Enemy ({name, img}){
    return <div style={{ width: "10rem" }}>
        Nome: {name}
        <img style={{ width: "100%" }} src={img} alt={name} />
    </div>
}

function Arena (){
    return <div>
        <Hero name= "Homem-Aranha" img= {img_miranha}/>
        <Enemy name= "Duende-verde" img= {enemy_img}/>
    </div>
}

function World ({children}){
    return <div>
        {children}
    </div>
}


export {Hero, Enemy, Arena, World}