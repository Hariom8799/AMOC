import Card from "./Card"

const CardSection = ({productData}) => {

  return (
    <div>
        {
            productData.map((item)=>{
                return <Card key={item.id} item={item}/>
            })
        }
        
    </div>
  )
}

export default CardSection
