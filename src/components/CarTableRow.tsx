import type { Car } from '../cars.const'

export const CarTableRow = ({ car }: { car: Car }) => (
    <tr key={car.brand + car.model}>
        <td>
            {car.brand} {car.model}
        </td>
        <td>
            {car.price} {car.сurrency}
        </td>
        <td>{car.year}</td>
        <td>
            <select>
                {car.color.map((color, index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                ))}
            </select>
        </td>
        <td>
            <button
                className={car.isReserved ? 'reserved' : ''}
                disabled={car.isReserved}
            >
                {car.isReserved ? 'Забронирован' : 'Забронировать'}
            </button>
        </td>
    </tr>
)
