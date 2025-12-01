import YAML from "yaml";
import fsp from "fs/promises";

import { IPackageDeployerConfiguration } from "./types";

const FILE_NAME = "deployer-config.yaml";

/**
 * Package deployer configuration
 */
export default class PackageDeployerConfiguration {
	configuration: IPackageDeployerConfiguration;

	/**
	 * Package deployer configuration
	 */
	constructor(configuration: IPackageDeployerConfiguration) {
		this.configuration = configuration;
	}

	/**
	 * Get blacklist
	 */
	getBlacklist() {
		return this.configuration.blacklist;
	}

	/**
	 * Load
	 */
	static async load() {
		const fileData = await fsp.readFile(FILE_NAME, {
			encoding: "utf-8",
		});
		const configuration = YAML.parse(fileData);

		return new PackageDeployerConfiguration(configuration);
	}

	/**
	 * Save
	 */
	async save() {
		const data = YAML.stringify(this.configuration);
		await fsp.writeFile(FILE_NAME, data, {
			encoding: "utf-8",
		});
	}
}
