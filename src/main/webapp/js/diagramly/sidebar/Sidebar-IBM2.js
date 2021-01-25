(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		const dt = 'ibm mondrian ';
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

		const ACTOR = MBS.SHAPE_TYPE.ACTOR;
		const GROUP = MBS.SHAPE_TYPE.GROUP;
		const LOGICAL_NODE = MBS.SHAPE_TYPE.LOGICAL_NODE;
		const PRESCRIBED_NODE = MBS.SHAPE_TYPE.PRESCRIBED_NODE;

		const CONTAINER = MBS.SHAPE_CONTAINER.YES_TRANSPARENT;
		const NO_CONTAINER = MBS.SHAPE_CONTAINER.NO_TRANSPARENT;

		const COLLAPSED = MBS.SHAPE_LAYOUT.COLLAPSED;
		const EXPANDED = MBS.SHAPE_LAYOUT.EXPANDED;

		const FILL_ICON_NONE = 'none';
		const FILL_ICON_LIGHT = 'none';
		const FILL_ICON_MEDIUM = 'none';
		const FILL_ICON_DARK = 'none';

		const FILL_CONTAINER_NONE = 'none';
		const FILL_CONTAINER_WHITE = 'none';
		const FILL_CONTAINER_LIGHT = 'none';

		const FILL_TEXT_NONE = 'none';
		const FILL_TEXT_WHITE = 'none';
		const FILL_TEXT_LIGHT = 'none';

		const ACCOUNT_COLOR = MBS.COLOR_FAMILY.GRAY;
		const COMPUTE_COLOR = MBS.COLOR_FAMILY.BLUE;
		const KUBE_COLOR = MBS.COLOR_FAMILY.TEAL;
		const NETWORK_COLOR = MBS.COLOR_FAMILY.BLUE;
		const SECURITY_COLOR = MBS.COLOR_FAMILY.RED;
		const STORAGE_COLOR = MBS.COLOR_FAMILY.BLUE;
		const USER_COLOR = MBS.COLOR_FAMILY.BLACK;
		const VPC_COLOR = MBS.COLOR_FAMILY.GREEN;

		const stencils = {
		   'Groups': { 
			'IBM Cloud': {icon: 'ibm-cloud', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Region': {icon: 'flag', type: GROUP, multiplicity: false, color: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Region Alt': {icon: 'location', type: GROUP, multiplicity: false, color: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Zone': {icon: 'data--base--alt', type: GROUP, multiplicity: false, color: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Cloud Services': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Classic Infrastructure': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Account': {icon: 'user', type: GROUP, multiplicity: false, color: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Access Group': {icon: 'credentials', type: GROUP, multiplicity: false, color: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Resource Group': {icon: 'collaborate', type: GROUP, multiplicity: false, color: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},

			'VPC': {icon: 'virtual-private-cloud', type: GROUP, multiplicity: false, color: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Subnet:ACL': {icon: 'default', type: GROUP, multiplicity: false, color: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Virtual Server': {icon: 'virtual-machine', type: GROUP, multiplicity: false, color: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Instance Group': {icon: 'default', type: GROUP, multiplicity: false, color: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Physical Server': {icon: 'default', type: GROUP, multiplicity: false, color: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Endpoints': {icon: 'default', type: GROUP, multiplicity: false, color: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Security Group': {icon: 'security', type: GROUP, multiplicity: false, color: SECURITY_COLOR,  layout: EXPANDED, container: NO_CONTAINER},

			'Kubernetes Cluster': {icon: 'default', type: GROUP, multiplicity: false, color: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'OpenShift Cluster': {icon: 'default', type: GROUP, multiplicity: false, color: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Kubernetes Service': {icon: 'default', type: GROUP, multiplicity: false, color: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Kubernetes Replica Set': {icon: 'default', type: GROUP, multiplicity: false, color: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Kubernetes Pod': {icon: 'default', type: GROUP, multiplicity: false, color: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Kubernetes Namespace': {icon: 'default', type: GROUP, multiplicity: false, color: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},

			'Public Network': {icon: 'events', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Enterprise Network': {icon: 'enterprise', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Cloud Foundry': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Data Center': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Point of Presence': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'Overlay Network': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
			'VLAN': {icon: 'default', type: GROUP, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: EXPANDED, container: CONTAINER},
		},

		'Compute': {
			'Virtual Server': {icon: 'virtual-machine', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Instance Group': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Compute Devices': {
			'Physical Server': {icon: 'archive', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Mobile Device': {icon: 'mobile', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Tablet Device': {icon: 'tablet', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Laptop Device': {icon: 'laptop', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Desktop Computer': {icon: 'devices', type: LOGICAL_NODE, multiplicity: false, color: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Network': {
			'Floating IP': {icon: 'connect', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Transit Gateway': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Endpoints': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Network Devices': {
			'Application Load Balancer': {icon: 'parent-child', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Network Load Balancer': {icon: 'parent-child', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Public Gateway': {icon: 'network--2', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Edge Node': {icon: 'edge-node', type: LOGICAL_NODE, multiplicity: false, color: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Security': {
			'VPN': {icon: 'VPN', type: LOGICAL_NODE, multiplicity: false, color: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'VPN Policy': {icon: 'policy', type: LOGICAL_NODE, multiplicity: false, color: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Identity and Access Manager': {icon: 'fingerprint-recognition', type: LOGICAL_NODE, multiplicity: false, color: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Credentials': {icon: 'credentials', type: LOGICAL_NODE, multiplicity: false, color: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Rule': {icon: 'rule', type: LOGICAL_NODE, multiplicity: false, color: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Security Devices': {
			'VPN Gateway': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Storage': {
			'Object Storage Accessor': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Object Storage Slicestor': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Storage Devices': {
			'Block Storage': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'File Storage': {icon: 'default', type: LOGICAL_NODE, multiplicity: false, color: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Object Storage': {icon: 'object-storage', type: LOGICAL_NODE, multiplicity: false, color: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		},

		'Users': {
			'User': {icon: 'user', type: ACTOR, multiplicity: false, color: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Users': {icon: 'group', type: ACTOR, multiplicity: false, color: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Events': {icon: 'events', type: ACTOR, multiplicity: false, color: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Collaborate': {icon: 'collaborate', type: ACTOR, multiplicity: false, color: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
			'Web Browser': {icon: 'terminal', type: ACTOR, multiplicity: false, color: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE, layout: COLLAPSED, container: CONTAINER},
		   },
		};

		for (let section in stencils) {
			const shapes = stencils[section];
			var entries = [];

			for (let name in shapes) {
				entries.push(this.addEntry(dt + name.toLowerCase(), function() {
					const shape = shapes[name];
					var styleFont = '';
					var extraStyle = '';
					var shapeId = '';

					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shape.type, shape.layout, shape.color, shape.container, styleFont, extraStyle, shapeId, name, shape.icon);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
				}))
			}
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + section)
			this.addPaletteFunctions('ibm2' + section, 'IBM 2.0 / ' + section, false, entries);
		}

		this.setCurrentSearchEntryLibrary();
	};
})();
