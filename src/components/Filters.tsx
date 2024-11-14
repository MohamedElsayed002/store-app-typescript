
import { Form , useLoaderData , Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { ProductsResponseWithParams } from "../utils"
import FormInput from "./FormInput"
import SelectInput from "./FormSelect"
const Filters = () => {

    const {meta,params} = useLoaderData() as ProductsResponseWithParams
    const {search,category,company,order,page,price,shipping} = params
    return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* <div className='mb-2'>
        <Label htmlFor='search'>Search Product</Label>
        <Input id='search' placeholder="name" name='search' type='text' defaultValue={search} />
      </div> */}
      <FormInput type='search' label='search product' name='search' defaultValue={search} />

      <SelectInput
        label='select category'
        name='category'
        options={meta.categories}
        defaultValue={category}
      />

      <SelectInput
        label='select company'
        name='company'
        options={meta.companies}
        defaultValue={company}
      />

      <SelectInput
        label='order by'
        name='order'
        options={['a-z','z-a','high','low']}
        defaultValue={order}
      />
      <Button type='submit' size='sm' className='self-end mb-2'>
        search
      </Button>
      <Button
        type='button'
        asChild
        size='sm'
        variant='outline'
        className='self-end mb-2'
      >
        <Link to='/products'>reset</Link>
      </Button>
    </Form>
  )
}

export default Filters