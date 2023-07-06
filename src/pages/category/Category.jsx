import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import LoadingAnimation from '../../components/loadingAnimation/LoadingAnimation';

const Category = () => {
    const {auth} = useContext(AuthContext);
    console.log(auth);
    const [allCategories,setAllCategories] = useState([]);
    const [currentCat, setCurrentCat] = useState({name:""});
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        (async()=>{
            try{
                const {categories} = (await axios.get("http://localhost:3000/categories/")).data;
                setIsLoading(false)
                setAllCategories(categories);
            }catch(e){
                setAllCategories([]);
            }
        })();
    },[]);


    const handleDeleteCat = async(id)=>{
        const deletedCat = await axios.delete(`http://localhost:3000/categories/${id}`,{headers:{Authorization:auth.accessToken}});
        console.log(deletedCat);
        const newCatArr = allCategories.filter((category)=> category._id != id);
        setAllCategories(newCatArr);
    };

    const handleAddEdit = async()=>{
        if(!currentCat._id){
            const {category} = (await axios.post("http://localhost:3000/categories/",currentCat,{headers:{Authorization:auth.accessToken}})).data;
            console.log(category);
            //clone
            const newCatArr = [...allCategories];
            //edit
            newCatArr.push(category);
            //setState
            setAllCategories(newCatArr);
            setCurrentCat({name:""});
        }
        else{
            const editedCategory = await axios.patch(`http://localhost:3000/categories/${currentCat._id}`,currentCat,{headers:{Authorization:auth.accessToken}});
            console.log(editedCategory);
            //clone
            const newCatArr = [...allCategories];
            const index = newCatArr.findIndex((cat)=>cat._id == currentCat._id);
            newCatArr[index] = {...newCatArr[index]};
            //edit
            newCatArr[index].name = currentCat.name
            //setState
            setAllCategories(newCatArr);
            setCurrentCat({name:""});
        }
    }
    return ( <div className="p-40">
    <div className='flex justify-center'>
        <div>
        <label className='block text-2xl'>Category Name:</label>
        <input className='input' onChange={(e)=>setCurrentCat({...currentCat,name:e.target.value})} value={currentCat.name} type='text' />
        <button onClick={handleAddEdit} className='btn btn-success m-5'>Submit</button>
        </div>
    </div>
    {isLoading? <div className='w-full'><LoadingAnimation /></div> : allCategories.length > 0? <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th className='text-xl'>Name</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {allCategories.map((category,idx)=>
            <tr key={category._id} className={`cursor-pointer ${currentCat._id == category._id? "bg-project-main-color" : ""}`}>
                <th>{idx+1}</th>
                <td onClick={()=>setCurrentCat(category)} className='text-lg'>{category.name}</td>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleDeleteCat(category._id)} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="w-8 h-8 cursor-pointer hover:stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </td>
            </tr>
            )}
            </tbody>
        </table>
    </div>:
        <div className='flex flex-col w-full items-center justify-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <h1 className='text-project-main-color custom-font custom-font-bold !text-4xl'>No products to show</h1>
        </div>
    }
    </div> );
}
 
export default Category;