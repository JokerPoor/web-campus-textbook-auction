import PopupFunctional from '@/components/floating-panel-functional/index.vue';
import { render, StyleValue, VNode } from 'vue';

export interface UsePopupInstance {
	close: () => void;
	heddle: () => void;
	show: () => void;
}

export default <T = object>(options: {
	props?: {
		style?: StyleValue;
	} & T;
	slots?: {
		[key: string]: () => VNode | VNode[] | undefined;
	};
}): UsePopupInstance => {
	const container = document.createElement('div');
	const vNode = h<object>(PopupFunctional, { ...(options.props ?? {}), container }, options.slots ?? {});
	document.body.appendChild(container);
	render(vNode, container);

	return {
		close() {
			container.remove();
		},
		heddle() {
			container.style.display = 'none';
		},
		show() {
			container.style.display = 'block';
		},
	};
};
