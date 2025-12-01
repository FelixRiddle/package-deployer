import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import PackageDeployerConfiguration from "../PackageDeployerConfiguration";

/**
 * Main
 */
async function main() {
	const config = await PackageDeployerConfiguration.load();

	return (
		yargs()
			.option("packages-path", {
				demandOption: true,
				type: "string",
				description: "Path to the packages to deploy",
			})
			.middleware(
				async (args) => {
				},
				true // 'true' runs the middleware before validation (good for setup)
			)
			.command(
				"deploy",
				"Read a folder and deploy all packages",
				(args) => {},
				async (args) => {}
			)
			.help()
			.parse(hideBin(process.argv))
	);
}

main();
