module.exports = {
    mode: "development",
    entry: './src/index.js', // the starting point for our program
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
}