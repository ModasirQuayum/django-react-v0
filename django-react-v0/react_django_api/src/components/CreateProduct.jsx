import React from 'react'
import Input from './Input'
import apiUrl from '../config/config'
import productListing from '../api/product'
import { useNavigate } from 'react-router'
import { Controller, useForm } from 'react-hook-form'

import SelectInput from './SelectInput'

const CreateProduct = () => {
    
    const navigate = useNavigate()
    const {register,handleSubmit,control,formState} = useForm(
      {
        defaultValues:{
          platform: ''
        }
      }
    )
    const product = async (data)=>{
        const {title,brand_name,platform,description} = data
        try {
            const response = await productListing.createProduct(title,brand_name,platform,description)
            //console.log(platform)
            if(response) navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create new product listing
                  </h1>
                  <form  className="relative space-y-4 md:space-y-6" onSubmit={handleSubmit(product)}>
                      <Input
                        field_tag="input"
                        label="Title"
                        type="text"
                        id="title"
                        {...register("title",{required:true})}
                      />
                      <Input
                        field_tag="input"
                        label="Brand Name"
                        type="text"
                        id="brand_name"
                        {...register("brand_name",{required:true})}
                      />
                      <Controller
                        control={control}
                        name="platform"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <SelectInput
                            field_tag="selectTags"
                            label="Choose Platform"
                            {...field}

                          />
                        )}
                      />        
                      <Input
                        field_tag="textArea"
                        label="Description"
                        type="text"
                        id="description" 
                        {...register("description",{required:true})}                       
                      />
                      <button
                       type="submit" 
                         className={`w-full py-2 text-gray-100 cursor-pointer ${formState.isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-900'
                        }`}
                       disabled={formState.isSubmitting}
                       >
                        {formState.isSubmitting ? 'Creating...' : 'Create'}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default CreateProduct