class Clothing {
      constructor(public id: number, public codprod: number, public collezione: string, public capo: string, public modello: number, public quantita: number,
                public colore: string, public prezzoivaesclusa: number, public prezzoivainclusa: number, public disponibile: string, public saldo: number) {

    }

    get saldocapo(): number {
        return this.saldo
    }

   get acquistocapo(): number {
        return this.prezzoivainclusa
    }
}
const url:string = './starter/Abbigliamento.json'
const avalaibleCloths: Clothing[] = []
const write =  (cloth:Clothing):void=>{
    const newCol:HTMLDivElement= document.createElement('div')
    newCol.classList.add('col-12', 'd-flex', 'justify-content-between','align-items-center','bg-secondary', 'text-light', 'mt-2', 'py-2', 'shadow')
    newCol.innerHTML= `
<div class="d-flex justify-content-around flex-grow-1">
    <p class="m-0">
    ${cloth.capo}
    </p>    
    <p class="m-0">
    ${cloth.prezzoivainclusa}$
    </p>
</div>
<div>
<button class="btn btn-primary">Dettagli</button>
</div>
    `

    const row:HTMLDivElement= document.getElementById('row') as HTMLDivElement
    row.appendChild(newCol)
}

// fetch(url)
//     .then((res: Response) => {
//         return res.json()
//     })
//     .then((data):void => {
//         data.forEach((cloth: Clothing): void => {
//             const capo: Clothing = new Clothing(cloth.id, cloth.codprod, cloth.collezione, cloth.capo, cloth.modello, cloth.quantita, cloth.colore, cloth.prezzoivaesclusa, cloth.prezzoivainclusa, cloth.disponibile, cloth.saldo)
//             avalaibleCloths.push(capo)
//         })
//     })
//     .catch(err=>{
//         console.log(err)
//     })
const getCloths = async function(url:string):Promise <void>{
    let cloths = await fetch(url).then((res:Response): Promise<any> =>res.json())
    cloths.forEach((cloth: Clothing): void => {
             let capo: Clothing = new Clothing(cloth.id, cloth.codprod, cloth.collezione, cloth.capo, cloth.modello, cloth.quantita, cloth.colore, cloth.prezzoivaesclusa, cloth.prezzoivainclusa, cloth.disponibile, cloth.saldo)
              avalaibleCloths.push(capo)
        write(cloth)

         })
    const allBtns: NodeListOf<Element> = document.querySelectorAll('.btn')
    allBtns.forEach((btn:Element,i:number):void=>{
        btn.addEventListener('click', function (){
            console.log(avalaibleCloths[i].saldocapo, 'saldo da scalare')
            console.log(avalaibleCloths[i].acquistocapo, 'costo iva inclusa')
        })
    })
}
getCloths(url)



