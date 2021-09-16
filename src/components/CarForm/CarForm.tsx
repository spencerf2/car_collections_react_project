import React from 'react';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {useForm} from 'react-hook-form';
import {chooseMake, choosePrice} from '../../redux/slices/rootSlice';
import {Input} from '../sharedComponents/Input';
import {Button} from '@material-ui/core';

import {server_calls} from '../../api';

import {useGetData} from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    make: string;
    price: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let {carData, getData} = useGetData();
    const store = useStore()
    const make = useSelector<CarState>(state => state.make)
    const price = useSelector<CarState>(state => state.price)
    const {register, handleSubmit} = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            await server_calls.update(props.id!, data)
            window.location.reload()
            console.log(`Updated:${data} ${props.id}`)
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            dispatch(choosePrice(data.price))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="battery_size">Battery Size</label>
                    <Input {...register('battery_size')} name="battery_size" placeholder="Battery Size"/>
                </div>
                <div>
                    <label htmlFor="range_on_one_charge">Range On One Charge</label>
                    <Input {...register('range_on_one_charge')} name="range_on_one_charge" placeholder="Range On One Charge"/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" placeholder="Dimensions"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="cost_of_product">Cost Of Production</label>
                    <Input {...register('cost_of_product')} name="cost_of_product" placeholder="Cost Of Production"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}