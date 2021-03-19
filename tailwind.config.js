module.exports = {
    purge: ['./pages/**/*.js'],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    variants: {
        scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
};
