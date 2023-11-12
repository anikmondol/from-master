import { useContext } from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";


const Dad = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money - 100)}>Sub 100 tk</button>
        </div>
    );
};

export default Dad;