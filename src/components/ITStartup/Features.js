import React from 'react';
import * as Icon from 'react-feather';
import { Link } from "gatsby";

const Features = () => {
    return (
        <div className="boxes-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Server />
							</div>

							<h3>
								<Link to="/feature-details">
									Seamless Project Execution
								</Link>
							</h3>

							<p>We specialize in plant maintenance, shutdown services, and commissioning—ensuring minimal downtime and maximum operational efficiency for our clients.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Code />
							</div>

							<h3>
								<Link to="/feature-details">
									Skilled & Certified Workforce
								</Link>
							</h3>

							<p>Our team includes trade-qualified artisans with expertise in mechanical, electrical, and instrumentation work—ready to meet project demands with precision and safety.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Users />
							</div>

							<h3>
								<Link to="/feature-details">
									Team Management
								</Link>
							</h3>

							<p>Oceans Engineering prioritizes safety, accountability, and clear communication. Our teams are trained, medically fit, and fully aligned with mining and industrial standards.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.GitBranch />
							</div>

							<h3>
								<Link to="/feature-details">
									Workplace Ethics & Compliance
								</Link>
							</h3>

							<p>We operate with integrity, accountability, and full compliance with industry regulations. Our commitment to ethical practices ensures safe, transparent, and professional service delivery at every level.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
