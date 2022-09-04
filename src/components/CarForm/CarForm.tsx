import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseModel, chooseYear, choosePrice, chooseCarQuality, chooseDescription } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

// This page will work in conjecture w/ redux

interface carFormProps {
  id?: string;
  data?: {}
};

interface carState {
  name: string;
  model: string;
  year: string;
  price: string;
  description: string;
  car_quality: string
};

export const CarForm = (props:carFormProps) => {

  // This is a redux specific hook that updates the store
  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<carState>(state => state.name);
  const {register, handleSubmit} =useForm({ })

  // function that will take in data/event and handle it when clicking "submit"
  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated: ${data} ${props.id}`);
      console.log(data)
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseName(data));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(choosePrice(data.price));
      dispatch(chooseDescription(data.description));
      dispatch(chooseCarQuality(data.car_quality));
      // create the data and send it to the store
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Make</label>
            <Input {...register('name')} name="name" placeholder='Make' />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <Input {...register('model')} name="model" placeholder='Model' />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <Input {...register('year')} name="year" placeholder='Year' />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Input {...register('price')} name="price" placeholder='Price' />
          </div>
          <div>
            <label htmlFor="description">Description/Car History</label>
            <Input {...register('description')} name="description" placeholder='Description' />
          </div>
          <div>
            <label htmlFor="car_quality">New or Used</label>
            <Input {...register('car_quality')} name="car_quality" placeholder='Car Quality' />
          </div>
          <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}