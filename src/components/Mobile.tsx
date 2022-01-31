/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
    Plane_3: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Mobile.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 5.2, -Math.PI / 2]} scale={[1.91, 1, 1]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials['Material.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials['Material.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_3.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Mobile.gltf')
