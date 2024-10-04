module.exports = {
    proxy: 'localhost:3000',  // Proxy the Express app
    files: ['public/**/*.*'],  // Watch files in the 'public' directory
    port: 3001,  // BrowserSync port
    open: false, // Don't open the browser automatically
    notify: false  // Disable BrowserSync notifications
};