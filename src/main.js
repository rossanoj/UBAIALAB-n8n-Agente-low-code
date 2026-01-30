const path = require('path');
const express = require('express');

/**
 * Main entry point for the application
 */

// Import required modules

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
	res.json({ 
		message: 'UBAIALAB n8n Agent Low-Code API',
		status: 'running',
		timestamp: new Date().toISOString()
	});
});

app.get('/health', (req, res) => {
	res.json({ status: 'healthy' });
});

// Main function
async function main() {
	try {
		console.log('Starting application...');
		
		// Start Express server
		app.listen(PORT, HOST, () => {
			console.log(`Server running on http://${HOST}:${PORT}`);
			console.log('Application is running!');
		});
		
	} catch (error) {
		console.error('Error starting application:', error.message);
		process.exit(1);
	}
}

// Execute main function
if (require.main === module) {
	main();
}

// Export for testing or module usage
module.exports = { main };