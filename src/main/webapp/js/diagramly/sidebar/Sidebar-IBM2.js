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
		const ACCOUNT_COLOR = {family: MBS.COLOR_FAMILY.GRAY, fillIcon: null, fillText: null, fillContainer: null};
		const APPLICATIONS_COLOR = {family: MBS.COLOR_FAMILY.PURPLE, fillIcon: null, fillText: null, fillContainer: null};
		const COMPUTE_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const DATA_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const KUBE_COLOR = {family: MBS.COLOR_FAMILY.TEAL, fillIcon: null, fillText: null, fillContainer: null};
		const MANAGEMENT_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const NETWORK_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const SECURITY_COLOR = {family: MBS.COLOR_FAMILY.RED, fillIcon: null, fillText: null, fillContainer: null};
		const STORAGE_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const USER_COLOR = {family: MBS.COLOR_FAMILY.BLACK, fillIcon: null, fillText: null, fillContainer: null};
		const VPC_COLOR = {family: MBS.COLOR_FAMILY.GREEN, fillIcon: null, fillText: null, fillContainer: null};

		// Stencil dictionaries
		const stencils = {
		   'Groups': { 
			'IBM Cloud': {id: '', icon: 'ibm-cloud', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Region': {id: '', icon: 'flag', format: GROUP_FORMAT, color: ACCOUNT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Region Alt': {id: '', icon: 'location', format: GROUP_FORMAT, color: ACCOUNT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Zone': {id: '', icon: 'data--base--alt', format: GROUP_FORMAT, color: ACCOUNT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Cloud Services': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Classic Infrastructure': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Account': {id: '', icon: 'user', format: GROUP_FORMAT, color: ACCOUNT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Access Group': {id: '', icon: 'credentials', format: GROUP_FORMAT, color: ACCOUNT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Resource Group': {id: '', icon: 'collaborate', format: GROUP_FORMAT, color: ACCOUNT_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},

			'VPC': {id: '', icon: 'virtual-private-cloud', format: GROUP_FORMAT, color: VPC_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Subnet:ACL': {id: '', icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Virtual Server': {id: '', icon: 'virtual-machine', format: GROUP_FORMAT, color: VPC_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Instance Group': {id: '', icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Physical Server': {id: '', icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Endpoints': {id: '', icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Security Group': {id: '', icon: 'security', format: GROUP_FORMAT_NOCONTAINER, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},

			'Kubernetes Cluster': {id: '', icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'OpenShift Cluster': {id: '', icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Service': {id: '', icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Replica Set': {id: '', icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Pod': {id: '', icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Kubernetes Namespace': {id: '', icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},

			'Public Network': {id: '', icon: 'events', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Enterprise Network': {id: '', icon: 'enterprise', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Cloud Foundry': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Data Center': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Point of Presence': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Overlay Network': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VLAN': {id: '', icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Compute': {
			'Virtual Server': {id: '', icon: 'virtual-machine', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Instance Group': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Compute Devices': {
			'Physical Server': {id: '', icon: 'archive', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Mobile Device': {id: '', icon: 'mobile', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Tablet Device': {id: '', icon: 'tablet', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Laptop Device': {id: '', icon: 'laptop', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Desktop Computer': {id: '', icon: 'devices', format: LOGICAL_FORMAT, color: COMPUTE_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Network': {
			'Floating IP': {id: '', icon: 'connect', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Transit Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Endpoints': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Network Devices': {
			'Application Load Balancer': {id: '', icon: 'parent-child', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Network Load Balancer': {id: '', icon: 'parent-child', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Public Gateway': {id: '', icon: 'network--2', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Edge Node': {id: '', icon: 'edge-node', format: LOGICAL_FORMAT, color: NETWORK_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Security': {
			'VPN': {id: '', icon: 'VPN', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'VPN Policy': {id: '', icon: 'policy', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Identity and Access Manager': {id: '', icon: 'fingerprint-recognition', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Credentials': {id: '', icon: 'credentials', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
			'Rule': {id: '', icon: 'rule', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },

		   'Security Devices': {
			'VPN Gateway': {id: '', icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
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
			'Web Browser': {id: '', icon: 'terminal', format: ACTOR_FORMAT, color: USER_COLOR, text: TEXT_DETAIL, extra: '', multiplicity: false},
		   },
		};

		for (let section in stencils) {
			const shapes = stencils[section];
			var entries = [];

			for (let name in shapes) {
				entries.push(this.addEntry(dt + name.toLowerCase(), function() {
					const shape = shapes[name];
					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shape.format.type, shape.format.layout, shape.color.family, shape.format.container, shape.text.font, shape.extra, shape.id, name, shape.icon);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
				}))
			}
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + section)
			this.addPaletteFunctions('ibm2' + section, 'IBM 2.0 / ' + section, false, entries);
		}

		this.setCurrentSearchEntryLibrary();
	};
})();
