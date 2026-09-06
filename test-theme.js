import chalk, { Chalk } from './source/index.js';

console.log(chalk.bold.inverse('\n === CHALK THEME DEMO === \n'));

// 1. Default Themes
console.log(chalk.cyan.bold('# 1. Default Themes'));
console.log(chalk.theme.error('✖ Error: Failed to connect to database.'));
console.log(chalk.theme.warning('⚠ Warning: High memory usage detected.'));
console.log(chalk.theme.success('✔ Success: Build finished in 240ms.'));
console.log(chalk.theme.info('ℹ Info: Server listening on port 3000.'));

// 2. Chaining on Themes
console.log('\n' + chalk.cyan.bold('# 2. Style Chaining on Themes'));
console.log(chalk.theme.error.underline('✖ Underlined error message'));
console.log(chalk.theme.warning.italic('⚠ Italicized warning message'));
console.log(chalk.strikethrough.theme.info('ℹ Strikethrough info via reverse chaining'));

// 3. Custom Theme with Object Config (color, bg, bold, underline)
console.log('\n' + chalk.cyan.bold('# 3. Custom Theme via Object Config'));
chalk.addTheme('critical', {
	color: 'yellow',
	bg: 'red',
	bold: true,
	underline: true,
});
console.log(chalk.theme.critical(' CRITICAL: Immediate action required! '));

// 4. Custom Theme with HEX Colors
console.log('\n' + chalk.cyan.bold('# 4. Custom Theme via HEX Colors'));
chalk.addTheme('cyberpunk', {
	color: '#00ffff',
	bg: '#ff007f',
	bold: true,
});
console.log(chalk.theme.cyberpunk(' CYBERPUNK 2077 '));

// 5. Custom Theme with Array of Styles
console.log('\n' + chalk.cyan.bold('# 5. Custom Theme via Array of Styles'));
chalk.addTheme('muted', ['dim', 'gray']);
console.log(chalk.theme.muted('Debug log: initializing core modules...'));

// 6. Custom Theme via Direct Chalk Chain
console.log('\n' + chalk.cyan.bold('# 6. Custom Theme via Direct Chalk Chain'));
chalk.addTheme('badge', chalk.black.bgGreenBright.bold);
console.log(chalk.theme.badge(' ACTIVE ') + ' Service is running smoothly.');

// 7. Custom Theme on a New Chalk Instance
console.log('\n' + chalk.cyan.bold('# 7. New Chalk Instance (Isolated)'));
const customChalk = new Chalk();
customChalk.addTheme('highlight', {
	color: 'magenta',
	bold: true,
	underline: true,
});
console.log(customChalk.theme.highlight('Highlighted message from isolated instance.'));

console.log('\n' + chalk.green.bold('All themes printed successfully!\n'));