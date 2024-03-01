
import Card from "@/app/components/Card"


const category = ({ params }) => {
  return (
    <div className="w-full md:py-20">
      <div className="w-11/12 mx-auto py-5 ">
        
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              category : {params.slug}
          </div>
        </div>

        {/* Product card section */}
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 md:px-0'> 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>

      </div>


    </div>
  )
}

export default category
