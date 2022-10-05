import { createUser } from '@/redux/slices/user.slice';
import React from 'react';
import { useDispatch } from 'react-redux';
export interface CreateButtonInterface {}

const CreateButton : React.FC<CreateButtonInterface> = () => {
	const dispatch = useDispatch();
	const handleClick=()=>{
		dispatch(createUser({name:"Jhon doe111221",id:12}))
}

	return <button onClick={handleClick}>Distpach action</button>;
};

export default CreateButton;

