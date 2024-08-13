
const SectionTitle = ({tittle,description}) => {
    return (
        <div className="text-center mt-14">
        <h1 className="text-red-500 text-4xl">{tittle}</h1> 
        <p>{description}</p>
     </div>
    );
};

export default SectionTitle;