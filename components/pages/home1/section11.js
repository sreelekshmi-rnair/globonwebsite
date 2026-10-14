export default function Section11() {
	return (
		<>
			<section className="s-partner" style={{ padding: '60px 0', background: '#edf5fd' }}>
				<div className="tf-container text-center">
					<p className="s-sub-title justify-center mb-10">
						<i className="icon-angles-right moveLeftToRight" />
						Trusted Ecosystem
					</p>
					<h3 className="s-title" style={{ fontSize: '28px', color: '#111' }}>
						Partnered With Leading <span>Banks &amp; NBFCs</span> Nationwide
					</h3>
					<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '25px' }}>
						{['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Federal Bank', 'Axis Bank', 'Bank of Baroda', 'Canara Bank', 'Tata Capital', 'Bajaj Finserv'].map((bank, bIdx) => (
							<span key={bIdx} style={{
								background: '#fff',
								border: '1px solid #e2e8f0',
								padding: '10px 20px',
								borderRadius: '12px',
								fontWeight: 700,
								fontSize: '14px',
								color: '#1a202c',
								boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
							}}>
								🏛️ {bank}
							</span>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
