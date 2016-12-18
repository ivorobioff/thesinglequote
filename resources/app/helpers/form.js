import { Children, isValidElement, cloneElement } from 'react';

export function normalizeControls(children, props = {}){
    
    return Children.map(children, child => {
        if (!isValidElement(child)){
            return child;
        }
        
        if (!child.type || !child.type.name){
            return child;
        }

        var types = [
            'Submit',
            'Button', 
            'Input', 
            'Email', 
            'Password',
            'Select', 
            'Textarea'
        ];
        if (types.indexOf(child.type.name) === -1){
            return child;
        }

        return cloneElement(child, props);
    });
}   