import "./DashboardCard.css";

export default function DashboardCard({ section, navigate }) {

    return (
        <div className="card">

            <div className="card__info">

                <div className="card__icon">
                    {section.icon}
                </div>

                <div>
                    <h2>{section.title}</h2>

                    <p>
                        Cantidad: {section.count}
                    </p>
                </div>

            </div>


            <div className="card__buttons">

                {section.buttons.map((button) => (
                    <button
                        key={button.label}
                        onClick={() => navigate(button.path)}
                    >
                        {button.label}
                    </button>
                ))}

            </div>

        </div>
    );
}