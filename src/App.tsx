import './App.css'
import { carsList } from './cars.const'
import { CarTableRow } from './components/CarTableRow'

const CarlistHave = () => {
    return carsList.length > 0 ? (
        <>
            {carsList.map((car) => (
                <CarTableRow key={car.brand + car.model} car={car} />
            ))}
        </>
    ) : (
        <tr>
            <td
                colSpan={5}
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    padding: '20px 0',
                }}
            >
                Автомобили не найдены
            </td>
        </tr>
    )
}

function App() {
    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr className="h1">
                        <th>Марка</th>
                        <th>Цена</th>
                        <th>Год</th>
                        <th>Цвет</th>
                        <th>Заказать</th>
                    </tr>
                </thead>
                <tbody>
                    <CarlistHave />
                </tbody>
            </table>
        </div>
    )
}

export default App

// const CarlistHave = () => {
//     if (carsList.length <= 0)
//         return (
//             <>
//                 <td colSpan={5} style={{ textAlign: 'center' }}>
//                     Автомобили не найдены
//                 </td>
//             </>
//         )
//     return (
//         <>
//             {carsList.map((car) => (
//                 <CarTableRow key={car.brand + car.model} car={car} />
//             ))}
//         </>
//     )
// }

// function App() {
//     return (
//         <div>
//             <table className="styled-table">
//                 <thead>
//                     <tr className="h1">
//                         <th>Марка</th>
//                         <th>Цена</th>
//                         <th>Год</th>
//                         <th>Цвет</th>
//                         <th>Заказать</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <CarlistHave />
//                     {/* {carsList.map((car) => (
//                         <CarTableRow key={car.brand + car.model} car={car} />
//                     ))} */}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default App
