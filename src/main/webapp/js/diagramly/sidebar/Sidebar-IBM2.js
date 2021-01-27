(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		const dt = 'ibm mondrian ';
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

		// Text dictionary
		const TEXT_DETAIL = {font: '', position: null};

		// Format dictionaries
		const ACTOR_FORMAT = {type: MBS.SHAPE_TYPE.ACTOR, layout: MBS.SHAPE_LAYOUT.COLLAPSED, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const GROUP_FORMAT = {type: MBS.SHAPE_TYPE.GROUP, layout: MBS.SHAPE_LAYOUT.EXPANDED, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const GROUP_FORMAT_NOCONTAINER = {type: MBS.SHAPE_TYPE.GROUP, layout: MBS.SHAPE_LAYOUT.EXPANDED, container: MBS.SHAPE_CONTAINER.NO_TRANSPARENT};
		const LOGICAL_FORMAT = {type: MBS.SHAPE_TYPE.LOGICAL_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const PRESCRIBED_FORMAT = {format: MBS.SHAPE_TYPE.PRESCRIBED_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};

		// Color dictionaries
		const APPLICATIONS_COLOR = {family: MBS.COLOR_FAMILY.PURPLE, fillIcon: null, fillText: null, fillContainer: null};
		const COMPUTE_COLOR = {family: MBS.COLOR_FAMILY.MAGENTA, fillIcon: null, fillText: null, fillContainer: null};
		const DATA_COLOR = {family: MBS.COLOR_FAMILY.CYAN, fillIcon: null, fillText: null, fillContainer: null};
		const DEVOPS_COLOR = {family: MBS.COLOR_FAMILY.GRAY, fillIcon: null, fillText: null, fillContainer: null};
		const MANAGEMENT_COLOR = {family: MBS.COLOR_FAMILY.TEAL, fillIcon: null, fillText: null, fillContainer: null};
		const NETWORK_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const SECURITY_COLOR = {family: MBS.COLOR_FAMILY.RED, fillIcon: null, fillText: null, fillContainer: null};
		const SERVICES_COLOR = {family: MBS.COLOR_FAMILY.GREEN, fillIcon: null, fillText: null, fillContainer: null};
		const STORAGE_COLOR = {family: MBS.COLOR_FAMILY.CYAN, fillIcon: null, fillText: null, fillContainer: null};
		const USER_COLOR = {family: MBS.COLOR_FAMILY.BLACK, fillIcon: null, fillText: null, fillContainer: null};

		// Stencil dictionaries
		const stencils = {
		   'Groups': { 
			'IBM Cloud': {id: '', icon: 'ibm-cloud', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Region': {id: '', icon: 'flag', format: GROUP_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Region Alt': {id: '', icon: 'location', format: GROUP_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Zone': {id: '', icon: 'data--base--alt', format: GROUP_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Cloud Services': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Classic Infrastructure': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Account': {id: '', icon: 'user', format: GROUP_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Access Group': {id: '', icon: 'credentials', format: GROUP_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Resource Group': {id: '', icon: 'collaborate', format: GROUP_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},

			'VPC': {id: '', icon: 'virtual-private-cloud', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPC Alt': {id: '', icon: 'virtual-private-cloud--alt', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Subnet:ACL': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Virtual Server': {id: '', icon: 'virtual-machine', format: GROUP_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Instance Group': {id: '', icon: 'default', format: GROUP_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Physical Server': {id: '', icon: 'default', format: GROUP_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPC Endpoints': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Security Group': {id: '', icon: 'security', format: GROUP_FORMAT_NOCONTAINER, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},

			'Kubernetes Cluster': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'OpenShift Cluster': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Service': {id: '', icon: 'default', format: GROUP_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Replica Set': {id: '', icon: 'default', format: GROUP_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Pod': {id: '', icon: 'default', format: GROUP_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Namespace': {id: '', icon: 'default', format: GROUP_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},

			'Public Network': {id: '', icon: 'events', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Enterprise Network': {id: '', icon: 'enterprise', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Cloud Foundry': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Data Center': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Point of Presence': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Overlay Network': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VLAN': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Applications': {
			'Application': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Automation': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'CLI Application': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Client Web Application': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Microservice': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Mobile Application': {id: '', icon: 'mobile', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Serverless Application': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: APPLICATIONS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Compute': {
			'Virtual Server': {id: '', icon: 'virtual-machine', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Virtual Server Profile Bx': {id: '', icon: 'virtual-machine', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Virtual Server Profile Cx': {id: '', icon: 'virtual-machine', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Virtual Server Profile Mx': {id: '', icon: 'virtual-machine', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Instance Group (Autoscaling)': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Classic Virtual Server': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Compute Devices': {
			'Dedicated Host': {id: '', icon: 'archive', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Physical Server (Bare Metal)': {id: '', icon: 'archive', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Mobile Device': {id: '', icon: 'mobile', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Tablet Device': {id: '', icon: 'tablet', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Laptop Device': {id: '', icon: 'laptop', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Desktop Computer': {id: '', icon: 'devices', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Web Browser': {id: '', icon: 'terminal', format: ACTOR_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Classic Physical Server (Bare Metal)': {id: '', icon: 'archive', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Data': {
			'Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'DataStax Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'EDB Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'ETCD Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'MongoDB Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'PostreSQL Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Rabbit Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Redis Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Elastc Database': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Block Volume': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'File System': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Object Bucket': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'BLOB': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DATA_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'DevOps': {
			'Source Code Repository': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Artifacts Repository': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Continuous Integration Tool': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Continuous Deployment Tool': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Build Tool': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Test Tool': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: DEVOPS_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Management': {
			'Alerting': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'IT Service Management': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Logging': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Monitoring': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: MANAGEMENT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Network': {
			'VPC': {id: '', icon: 'virtual-private-cloud', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPC Alt': {id: '', icon: 'virtual-private-cloud--alt', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Subnet:ACL': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Floating IP': {id: '', icon: 'connect', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPC Endpoints': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Internet': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'CDN': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'DNS': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Subnet': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VLAN': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Cloud Services': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Internet Services': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Direct Link': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Hybrid Networking': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Transit Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Network Devices': {
			'Application Load Balancer': {id: '', icon: 'parent-child', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Network Load Balancer': {id: '', icon: 'parent-child', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Global Load Balancer': {id: '', icon: 'network--2', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Load Balancer Listener': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Load Balancer Pool': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Public Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Edge Node': {id: '', icon: 'edge-node', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Router': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Backend Router': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Backend Router Group': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: true},
			'Switch': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Backend Switch': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Security': {
			'Security Group': {id: '', icon: 'security', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Code Signing Service': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Two-Factor Authentication': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'ID Management': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'File Integrity Management': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPN Connection': {id: '', icon: 'VPN', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPN Policy': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Rules': {id: '', icon: 'rule', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Network ACL': {id: '', icon: 'rule', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Security Services': {id: '', icon: 'rule', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Certificate': {id: '', icon: 'policy', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Credentials': {id: '', icon: 'credentials', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Identity and Access Manager': {id: '', icon: 'fingerprint-recognition', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Security Devices': {
			'VPN Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'IDS': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'IPS': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Bastion Host': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'HSM': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Security Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Firewall': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Services Infrastructure': {
			'Message Quuee': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'API Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Container Registry': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Virtual Image Repository': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SERVICES_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Storage': {
			'Object Storage Accessor': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Object Storage Slicestor': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Storage Devices': {
			'Block Storage': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'File Storage': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Object Storage': {id: '', icon: 'object-storage', format: LOGICAL_FORMAT, color: STORAGE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Users': {
			'User': {id: '', icon: 'user', format: ACTOR_FORMAT, color: USER_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Users': {id: '', icon: 'group', format: ACTOR_FORMAT, color: USER_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Events': {id: '', icon: 'events', format: ACTOR_FORMAT, color: USER_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Collaborate': {id: '', icon: 'collaborate', format: ACTOR_FORMAT, color: USER_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },
		};

		for (let section in stencils) {
			const shapes = stencils[section];
			var entries = [];

			for (let name in shapes) {
				entries.push(this.addEntry(dt + name.toLowerCase(), function() {
					const shape = shapes[name];
					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shape.format.type, shape.format.layout, shape.color.family, shape.format.container, shape.text.font, shape.extra+";version=v2", shape.id, name, shape.icon);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
				}))
			}
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + section)
			this.addPaletteFunctions('ibm2' + section, 'IBM 2.0 / ' + section, false, entries);
		}

		this.setCurrentSearchEntryLibrary();
	};
})();
