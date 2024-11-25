// from hooks
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Categories() {
    const { data, loading, error } = useFetch("categories")

    return (
        <div className='container'>
            <ul className='grid grid-cols-3 gap-4'>
                {data && data.data.map(category => {
                    return (
                        <li key={category.id}>
                            <Link to="/" className="card bg-base-100 shadow-xl h-full">
                                <div className="card-body">
                                    <h2 className="card-title">{category.title}</h2>
                                    <p>{category.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Tanlash</button>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories