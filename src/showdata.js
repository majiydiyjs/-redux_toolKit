import { useSelector } from "react-redux"

const Showdata = () => {
    const user = useSelector((state) => state.user);
    const { name, fatherName, profession } = user || {};

    return (
        <div>
            Name: {name}
            Father Name: {fatherName}
            Profession: {profession}
        </div>
    );
};

export default Showdata;
